// simple hack to parse times for comparism without using bogus packages/modules

const parseTime = (time) => {
    let splitTime = time.split(":");
    return new Date(2000, 0, 1, parseInt(splitTime[0]), parseInt(splitTime[1]));
}

export default parseTime