const db = require('../config/connection');

const { User, Course } = require('../models');

db.once('open', async () => {
    await User.deleteMany();

    await User.create({
        username: 'iLOVEgolf89',
        email: 'getgolfin21@gmail.com',
        password: 'password123'
    });

    await User.create({
        username: 'chipnput',
        email: 'driver123@gmail.com',
        password: 'password123'
    })

    await User.create({
        username: 'niceswing',
        email: 'putter123@gmail.com',
        password: 'password123'
    })

    await Course.deleteMany();

    await Course.create({
        courseName: 'The Golf Course',
        holeCount: 1,
        par: 3,
        courseRating: 10,
        slopeRating: 10
    })

    await Course.create({
        courseName: 'Bucks County Golf Course',
        holeCount: 2,
        par: 3,
        courseRating: 8,
        slopeRating: 9
    })

    await Course.create({
        courseName: 'Warrington Country Club',
        holeCount: 2,
        par: 3,
        courseRating: 8,
        slopeRating: 9
    })
    process.exit(); 
});