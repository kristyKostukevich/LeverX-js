function Computer( numberOfProcCores, procType, frequency, availabilityOfHyper, architectureBit,
                   manufact, graphicsCard, RAM, hardDiskSize, hardDiskType){
           numberOfProcCores = numberOfProcCores;
           procType = procType;
           frequency = frequency;
           availabilityOfHyper = availabilityOfHyper;
           architectureBit = architectureBit;
           manufact = manufact;
           graphicsCard = graphicsCard;
           RAM = RAM;
           hardDiskSize = hardDiskSize;
           hardDiskType = hardDiskType;

   this.getNumberOfProcCores = function() {
        return numberOfProcCores;
    };
   this.setNumberOfProcCores = function(number) {
       numberOfProcCores = number;
   };

   this.getProcType = function() {
        return procType;
    };
   this.setProcType = function(proc) {
       procType = proc;
   };

   this.getFrequency = function() {
        return frequency;
    };
   this.setFrequency = function(freq) {
       frequency = freq;
   };

   this.getAvailabilityOfHyper = function() {
        return availabilityOfHyper;
    };
   this.setAvailabilityOfHyper = function(availability) {
       availabilityOfHyper = availability;
   };

   this.getArchitectureBit = function() {
        return architectureBit;
    };
   this.setArchitectureBit = function(bit) {
       architectureBit = bit;
   };

   this.getManufact = function() {
        return manufact;
    };
   this.setManufact = function(manuf) {
       manufact = manuf;
   };

   this.getGraphicsCard = function() {
        return graphicsCard;
    };
   this.setGraphicsCard = function(number) {
       graphicsCard = number;
   };

   this.getRAM = function() {
        return RAM;
    };
   this.setRAM = function(number) {
       RAM = number;
   };

   this.getHardDiskSize = function() {
        return hardDiskSize;
    };
   this.setHardDiskSize = function(size) {
       hardDiskSize = size;
   };

   this.getHardDiskType = function() {
        return numberOfProcCores;
    };
   this.setHardDiskType = function(type) {
       hardDiskType = type;
   };
   this.toString = function () {
        var str = '';
        str += 'COMPUTER \n' +
            'Number of processor cores: ' + numberOfProcCores + '\n' +
            'Processor type: ' + procType + '\n' +
            'Frequency: ' + frequency + '\n' +
            'Availability of Hyper-Threading technology: ' + availabilityOfHyper + '\n' +
            'Manufacturer: ' + manufact + '\n' +
            'Graphics card: ' + graphicsCard + '\n' +
            'RAM size: ' + RAM + '\n' +
            'Hard disk size: ' + hardDiskSize + '\n' +
            'Hard disk type: ' + hardDiskType + '\n';
        return str;
   }
}
function Ultrabook(numberOfProcCores, procType, frequency, availabilityOfHyper, architectureBit,
                   manufact, graphicsCard, RAM, hardDiskSize, hardDiskType, weight) {
    Computer.call(this, numberOfProcCores, procType, frequency, availabilityOfHyper, architectureBit,
                    manufact, graphicsCard, RAM, hardDiskSize, hardDiskType);
    weight = weight;

    this.getWeigth = function() {
        return weight;
    };
    this.setWeigth = function(weight) {
        weight = weight;
    };
    this.getCharacteristics = function () {
        return this.toString() +
            'Weight: ' + weight + ' кг';
    }
}

function Server(numberOfProcCores, procType, frequency, availabilityOfHyper, architectureBit,
                manufact, graphicsCard, RAM, hardDiskSize, hardDiskType, IP) {
    Computer.call(this, numberOfProcCores, procType, frequency, availabilityOfHyper, architectureBit,
        manufact, graphicsCard, RAM, hardDiskSize, hardDiskType);
    IP = IP;
    this.getIP = function() {
        return IP;
    };
    this.setIP = function(IP) {
        IP = IP;
    };
    this.getCharacteristics = function () {
        return this.toString() +
            'IP: ' + IP;
    }
}

var computer = new Computer (4, 'coreI5', 2700, true, 64, 'Lenovo', 'AMD', 100);
computer.setHardDiskSize(1000);
computer.setHardDiskType('hdd+ssd');
console.log(computer.getFrequency());
console.log(computer.toString());
var ultrabook = new Ultrabook(4, 'coreI7', 2700, true, 64, 'Lenovo', 'AMD', 100, 256);
ultrabook.setHardDiskType('ssd');
ultrabook.setWeigth(1000);
console.log(ultrabook.getWeigth());
console.log(ultrabook.getCharacteristics());
var server = new Server(4, 'coreI7', 2700, true, 64, 'Lenovo', 'AMD', 100, 256, 'hdd', '172.98.0.100');
console.log(server.getCharacteristics());
var click = function() {
    alert("Created\\Changed");
}
