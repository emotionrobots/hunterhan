import { InfoWidgetTypes } from "../components/InfoWidget";

let USER_TOKEN = null

const GET_HEADERS = {
    method: 'GET',
    headers: { 'Content-Type': 'plain/text' },
};

function __internal_fetch(link, headers, params, handleError, isJSON, callback) {
    // TODO: When backend is implemented, then check to see if there is USER_TOKEN, if so then continue, if not call handleError
    fetch(link, headers)
        .then(res => isJSON ? res.json() : res.text())
        .then(data => callback(data))
        .catch(reason => handleError(reason))
}

export function setUserToken(tok) {
    USER_TOKEN = tok
}

export function getUserContext(callback) {
    // User profile will write to S3
    // User profile image will be a link referencing the image
    callback({
        username: 'Tester',
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