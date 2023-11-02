// seed.ts

import * as mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import { PointSeedModel, PolygonSeedModel } from './schema';

async function seed() {
    try {
        // Connect to your MongoDB database
        await mongoose.connect('mongodb://localhost:27017/geospatial', {
        });

        // Clear the database
        await mongoose.connection.db.dropDatabase();

        // Seed your database
        await seedPoints();
        await seedPolygons();



        console.log('Seed data inserted successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        // Close the database connection
        mongoose.connection.close();
    }
}

async function seedPoints() {
    for (let i = 0; i < 10000; i++) {
        const [latitude, longitude] = faker.location.nearbyGPSCoordinate({ origin: [28.899385205729615, 76.59638156639471], radius: 3500, isMetric: true })
        const point = new PointSeedModel({
            type: 'Point',
            coordinates: [longitude, latitude]
        })
        await point.save()
    }
}

async function seedPolygons() {
    for (let i = 0; i < 10000; i++) {
        const [latitude, longitude] = faker.location.nearbyGPSCoordinate({ origin: [28.899385205729615, 76.59638156639471], radius: Math.random() * 3500, isMetric: true })
        const latLongData = Array.from({ length: Math.random() * 100 }, () => {

            const [latitude1, longitude1] = faker.location.nearbyGPSCoordinate({ origin: [latitude, longitude], radius: 0.2, isMetric: true })
            return [longitude1, latitude1]
        })

        const polygon = new PolygonSeedModel({
            type: 'Polygon',
            coordinates: [latLongData]
        })
        await polygon.save()
    }
}

seed();
