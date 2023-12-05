import { LightningElement } from 'lwc';

export default class ForEachLwc extends LightningElement {

    employee = {

        fname : 'Himadri',
        lname : 'paul',
        city : 'california',
        age : 31
    }

    employeeList =[

        {

            fname : 'Haro',
            lname : 'paul',
            city : 'california',
            age : 37
        },

        {

            fname : 'Himadri',
            lname : 'paul',
            city : 'bangalore',
            age : 31
        },

        {

            fname : 'Max',
            lname : 'glen',
            city : 'perth',
            age : 40
        }

    ]
}