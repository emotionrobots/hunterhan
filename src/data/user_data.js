import { InfoWidgetTypes } from "../components/InfoWidget";
import Auth from "@aws-amplify/auth";

let USER_TOKEN = null
let USER_ATTRIBUTES = null

const GET_HEADERS = {
    method: 'GET',
    headers: { 'Content-Type': 'plain/text' },
};

function __internal_fetch(link, headers, params, handleError, isJSON, callback) {
    retrieveUserToken((e) => {
        handleError(e)
    },() => {
        fetch(link, headers)
        .then(res => isJSON ? res.json() : res.text())
        .then(data => callback(data))
        .catch(reason => handleError(reason))
    })
}

function retrieveUserToken(errHandler, callback) {    
    Auth.currentAuthenticatedUser()
        .then((cognitoUser) => {
            cognitoUser.getSession((err, session) => {
                if (err) {
                    errHandler(err)
                    return
                }
        
                USER_TOKEN = session.accessToken.jwtToken
                USER_ATTRIBUTES = {
                    username: session.idToken.payload['cognito:username'],
                    email: session.idToken.payload.email,
                    phone_number: session.idToken.payload.phone_number,
                    email_verified: session.idToken.payload.email_verified,
                    phone_number_verified: session.idToken.payload.phone_number_verified,
                }
        
                callback()
            })
        })
        .catch(errHandler)
}

export function getUserContext(callback) {
    // User profile will write to S3
    // User profile image will be a link referencing the image
    retrieveUserToken((e) => {console.log(e)}, () => {
        callback({
            username: USER_ATTRIBUTES.username,
            userProfileImageLink: '',
            organization: {
                'Yummy': [
                    'CA',
                    "CB",
                    "CD"
                ],
                'Clements': [
                    'Class A',
                    'Celazr00m'
                ]
            }
        })
    })
}

/**
 * Retrieves the username of the current user as a plain text.
 * @param {function(string)} callback Returns the data to this function after fetched. 
 */
export function getUsername(callback) {
    //TODO: Communicate with MQTT servers
    __internal_fetch('https://cors-anywhere.herokuapp.com/http://pc3-backend.e-motion.ai/api',
        GET_HEADERS,
        {},
        reason => {
            console.log(reason);
            callback("Error")
        },
        false,
        callback)
}

/**
 * Retrieves the organizations under this account in an array format.
 * @param {function(string)} callback Returns the data to this function after fetched. 
 */
export function getOrganizations(callback) {
    return [
        "My Groups",
        "Yummy",
        "Clements",
        "New One"
    ]
}

export function getInfoWidget(data, callback) {
    if (data === 'numOccupancy') {
        callback({
            cardType: InfoWidgetTypes.SINGLE,
            attributes: {
                data: "25 People in the Room",
                icon: "Human"
            }
        })
    }
}