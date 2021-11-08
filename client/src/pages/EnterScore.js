import React, { useState } from 'react'
import EnterScoreForm from '../components/EnterScoreForm'

export default function EnterScore() {


    const [courses, setCourses] = useState([
        {
            id: 1,
            courseName: "St. Andrews",
            rating: 73.1,
            slope: 132,
            scorecard: {
                holeOne: {
                    par: 4
                },
                holeTwo: {
                    par: 4
                },
                holeThree: {
                    par: 4
                },
                holeFour: {
                    par: 4
                },
                holeFive: {
                    par: 5
                },
                holeSix: {
                    par: 4
                },
                holeSeven: {
                    par: 4
                },
                holeEight: {
                    par: 3
                },
                holeNine: {
                    par: 4
                },
                holeTen: {
                    par: 4
                },
                holeEleven: {
                    par: 3
                },
                holeTwelve: {
                    par: 4
                },
                holeThirteen: {
                    par: 4
                },
                holeFourteen: {
                    par: 5
                },
                holeFifteen: {
                    par: 4
                },
                holeSixteen: {
                    par: 4
                },
                holeSeventeen: {
                    par: 4
                },
                holeEighteen: {
                    par: 4
                }
            }
        }
    ])

    return (
        <>
            <h1>Enter your score below</h1>
            <p>Scorecard has been pre-populated for the course that you selected. Course selected: {courses[0].courseName} </p>
            <EnterScoreForm selectedCourse={courses[0]} />
        </>
    )
}
