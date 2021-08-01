import parseTime from './parseTime.js'

describe('parseTime', () => {
    it("parses time correctly", () => {
        // Arrange
        const parsedTime = parseTime("02:30");
        const testDate = new Date(2000, 0, 1, 2, 30);

        // Act

        // Assert
        expect(parsedTime).toEqual(testDate);
    });

    it('compares time correctly', () => {
        // Arrange
        const earlyTime = "07:00";
        const laterTime = "19:00";

        // Act

        // Assert
        expect(parseTime(laterTime) > parseTime(earlyTime)).toBe(true);
    })
})