

'use strict';

const galaxy_Services = {
  _phone: {
    "Body": "152g, 8mm thickness",
    "Display": "5.8\" (2960 x 1440 pixels)",
    "Operating system": "Android 7.0 (Nougat)",
    "Memory": "64GB storage, microSD card slot",
    "Camera": "12 Megapixels, 2160p",
    "item": "Display",
    "Dimensions": "148.9 x 68.1 x 8mm",
    "Weight": 152,
    "SIM type": "Nano-SIM",
    "OS": "Andriod v7.0",
    "Chipset": "Snapdragon 835",
    "CPU": "Octa-core",
    "GPU": "Adreno 540",
    "Internal memory": "64GB",
    "RAM": "4GB",
    "Card slot": "microSD, up to 256GB",
    "Battery capacity": 3000,
    "Removable battery": "No",
    "Quick charge": "Yes",
    "Primary": "12MP with flash",
    "Secondary": "8MP",
    "Video": "2160p@60fps",
    "Autofocus": "Yes",
    "Dual lens": "No",
    "Face detection": "Yes",
    "HDR": "Yes",
    "OIS": "Yes",
    "Panorama": "Yes",
    "Touch focus": "Yes",
    "Bluetooth": "Yes",
    "GPS": "Yes",
    "Network": "GSM / HSPA / LTE",
    "NFC": "Yes",
    "WLAN": "Yes",
    "Size": 5.8,
    "Type": "Quad HD Dual edge Super AMOLED",
    "Resolution": "2960 x 1440",
    "Multitouch": "Yes",
    "Music player": "Yes",
    "Loudspeaker": "Yes",
    "3.5mm jack": "Yes",
    "Accelerometer": "Yes",
    "Assisted GPS": "Yes",
    "Digital Compass": "Yes",
    "Fingerprint": "Yes",
    "Gyroscope": "Yes",
    "Proximity": "Yes",
    "Colour": "Midnight Black",
    "Hexvalue": "#000000",
    "Icon": "Colour",
    customer_id: 7829706,
    A: 0,
    B: 0,
    C: 1,
    D: 1,
    I:1,
    J:1,
    n:1,
    Temp1:"",
    Temp2:"",
    Temp3:"",
    Temp4:"",
    Name:"",
    Address:"",
    Phone:436765876980,
    Email:"",
    Feedback:""
  },

  getPhone: function(customerId, callback) {
    callback(null, this._phone);
  },

  _branchMaster: [
    {
      "location": 'newyork',
      "address": '460 Park Ave, New York, NY 10022, United States',
      phone: '+1 212-000-0000',
      hours: '10AM–4PM'
    },
    {
      location: 'ny',
      address: '460 Park Ave, New York, NY 10022, United States',
      phone: '+1 212-000-0000',
      hours: '10AM–4PM'
    },
    {
      location: 'new york',
      address: '460 Park Ave, New York, NY 10022, United States',
      phone: '+1 212-000-0000',
      hours: '10AM–4PM'
    },
    {
      location: 'cochin',
      address: 'Cochin Shipyard, Mahatma Gandhi Rd, Ernakulam, Kerala 682015',
      phone: '0484 0000 0000',
      hours: '10AM–4PM'
    },
    {
      location: 'andheri',
      address: 'Swami Vivekanand Road, Andheri West, Mumbai, Maharashtra 400058',
      phone: '022 0000 0000',
      hours: '10AM–5PM'
    },
    {
      location: 'delhi',
      address: 'Rohini, Delhi, 110042',
      phone: '011 0000 0000',
      hours: '10AM–5PM'
    },
    {
      location: 'bangalore',
      address: 'Bangalore Airport Exit Road, Bengaluru, Karnataka 560017',
      phone: '080 0000 0000',
      hours: '10AM–5PM'
    },
    {
      location: 'mumbai',
      address: 'Nariman point, Mumbai, Maharashtra 400023',
      phone: '022 1111 1111',
      hours: '10AM–5PM'
    }
  ],
  getBranchInfo: function(location, callback) {
    for (let i = 0; i < this._branchMaster.length; i++) {
      if (this._branchMaster[i].location === location) {
        callback(null, this._branchMaster[i]);
        return;
      }
    }
    callback(null, null);
  }


};

module.exports = galaxy_Services;
