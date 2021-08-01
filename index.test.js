import get_all_sensors from "./index"

describe("main", () => {
    test("it returns correct sensors for quipment 4 given time range 14:36 - 16:10", async () => {
        // arrange

        // act
        const data = await get_all_sensors('Equipment4', '14:36', '16:10');

        // assert
        expect(data).toEqual([
            {Sensor2: '("14:36", "16:10")'},
            {Sensor5: '("14:36", "16:10")'}
        ])
   });

   test("it returns correct sensors for quipment 2 given time range 10:30 - 19:15", async () => {
        // arrange

        // act
        const data = await get_all_sensors('Equipment2', '10:30', '19:15');

        // assert
        expect(data).toEqual([
            { Sensor2: '("11:00", "12:00")' },
            { Sensor4: '("10:30", "14:30")' },
            { Sensor5: '("13:45", "19:15")' }
        ])
    })
})