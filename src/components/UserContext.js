import React from 'react';

export const UserContext = React.createContext(
    {
        username: 'Tester',
        token: '',
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
    }
)