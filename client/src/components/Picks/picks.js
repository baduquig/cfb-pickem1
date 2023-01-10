import React from "react";
import { useSelector } from 'react-redux';

class Picks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weekNumber: 1,
            /* gameId: 1,
            awaySchool: 123,
            awaySchoolName: 'Notre Dame',
            awaySchoolMascot: 'Fighting Irish',
            awaySchoolPrimaryColor: 'Blue',
            awaySchoolSecondaryColor: 'Gold',
            homeSchool: 456,
            homeSchoolName: 'Ohio State',
            homeSchoolMascot: 'Buckeyes',
            awaySchoolPrimaryColor: 'Scarlett',
            awaySchoolSecondaryColor: 'Silver' */
        }
    }

    render() {
        const picks = useSelector((state) => state.picks);
        
        return (
            <div>
                <table>
                    <tr>
                        <td><img /></td>
                        <td></td>
                        <td><img /></td>
                    </tr>
                </table>
            </div>
        );
    }
}