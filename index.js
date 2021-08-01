import loadJsonFile from "load-json-file"
import parseTime from "./src/utils/parseTime.js";

class System {
    constructor() {
    }

    async initialize() {
        this.data = await loadJsonFile('./src/data.json');
    }

    async get_all_sensors(equipment_id, start_time, end_time) {
        await this.initialize();

        const output = [];
    
        const parsedStartTime = parseTime(start_time);
        const parsedEndTime = parseTime(end_time);

        const equipmentsMapping = this.data['EquipmentsMapping'];

        const sensorMappings = equipmentsMapping[equipment_id];
            
        sensorMappings?.forEach((mapping) => {
            let mappingStartTime = parseTime(mapping.start_time);
            let mappingEndTime = parseTime(mapping.end_time);

            if(parsedStartTime > mappingEndTime || parsedEndTime < mappingStartTime) {
                return;
            } else {
                const outputStartTime = mappingStartTime < parsedStartTime ? start_time : mapping.start_time;
                const outputEndTime = parsedEndTime < mappingEndTime ? end_time : mapping.end_time;

                const outputItem = {
                    [mapping._id]: `("${outputStartTime}", "${outputEndTime}")`
                }
                output.push(outputItem);
            }

        })

        return output;
    }
}
export default System;