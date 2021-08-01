import loadJsonFile from "load-json-file"
import parseTime from "./src/utils/parseTime.js";

const get_all_sensors = async (equipment_id, start_time, end_time) => {
    const output = [];
    
    const parsedStartTime = parseTime(start_time);
    const parsedEndTime = parseTime(end_time);

    const data = await loadJsonFile('./src/data.json');
    const equipmentsMapping = data['EquipmentsMapping'];

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

export default get_all_sensors;