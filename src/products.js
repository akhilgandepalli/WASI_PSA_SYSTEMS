const products = [
  {
    id: 1,
    name: "Carbon Molecular Sieves",
    image: "/products images/carbon_molecular_sieves.png",
    // price: 1200,
    // old_price: 0,
    type: "Molecular Sieves",
    desc: `Carbon molecular sieves (CMS) are a type of molecular sieve made from carbon materials, 
    specifically designed for selective adsorption and separation of gases and liquids. 
    Unlike traditional molecular sieves, which are typically made from materials like zeolites or silica, CMS are constructed from carbon, 
    which imparts unique properties and advantages. 
    Here’s a detailed look at carbon molecular sieves:`,
    adddesc: "",
    details: {
      make: "Carbotech",
      type: "3KT172",
    },
  },
  {
    id: 2,
    name: "Activated Alumina",
    image: "/products images/activated_alumina.jfif",
    // price: 135,
    // old_price: 0,
    type: "Desiccants",
    desc: `Activated alumina is a form of aluminum oxide (Al₂O₃) that has been treated to create a highly porous material with a large surface area. It is widely used in various industrial applications due to its excellent adsorption and catalytic properties. Here’s a detailed description of activated alumina:`,
    adddesc: "",
    details: {
      application: "Heatless Desiccant Air Dryers",
      "Ball Size": "3-5 & 5-8mm",
    },
  },
  {
    id: 3,
    name: "Ceramic Ball",
    image: "/products images/ceramic_ball.jfif",
    // price: 120,
    // old_price: 0,
    type: "Desiccants",
    desc: `Ceramic balls are inert, spherical particles made from ceramic materials like alumina, zirconia, or silicon carbide. They are widely used in various industrial processes, particularly as a bed support media in fixed-bed Columns.`,
    adddesc: "",
    details: {
      type: "Spherical",
      size: "15-18mm",
    },
  },
  {
    id: 4,
    name: "Elomatic Actuator PD60",
    image: "/products images/Elomatic Actuator PD60.gif",
    // price: 6350,
    // old_price: 7306,
    type: "Pneumatic Valves & Actuators",
    desc: `Elomatic Actuator PD60 is a robust and versatile actuator designed for precise control in industrial applications. It features a compact and durable design, ideal for environments requiring reliable operation and minimal maintenance. The PD60 actuator offers high torque output and smooth performance, making it suitable for demanding tasks such as valve control, automation systems, and process regulation. With advanced features like adjustable speed settings and various control options, the PD60 ensures accurate and efficient actuation. Its flexibility and durability make it a preferred choice for enhancing operational efficiency and reliability in diverse industrial settings.`,
    adddesc: "",
    details: {
      Make: "El O Matic",
      Model: "PD60",
      Type: "Double Acting",
      Pilot: "Pressure 4-6Kgs",
    },
  },
  {
    id: 5,
    name: "Solenoid Valve 5/2 Nomor Type",
    image: "/products images/Solenoid Valve52Nomor Type.jfif",
    // price: 4500,
    // old_price: 0,
    type: "Industrial Valves",
    desc: `Solenoid Valve 5/2 NOMOR type is widely used in in various applications, including irrigation systems, automotive controls, and industrial automation, for their reliability and precise control.`,
    adddesc: "",
    details: {
      Make: "ROTEX",
      voltage: "Voltage 220VAC/24VDC",
      Type: "Coil Plug",
    },
  },
  {
    id: 6,
    name: 'Plug Valve with Xomox Actuator 1"',
    image: "/products images/Plug Valve with Xomox Actuator 1.jfif",
    // 
    type: "Industrial Valves",
    desc: `A plug valve with a pneumatic actuator is a type of valve used to control the flow of fluids in a pipeline. The plug valve features a cylindrical or tapered plug that rotates within the valve body to open or close the flow passage. The pneumatic actuator provides the mechanical force needed to rotate the plug, using compressed air to drive the actuator. This setup allows for precise and automated control of fluid flow, making it ideal for applications requiring quick and reliable operation. The combination of the plug valve and pneumatic actuator ensures efficient flow regulation and ease of use in various industrial processes.`,
    adddesc: "",
    details: {price: 12500,
    // old_price: 0,
      Make: "Xomox",
      Size: "25NB",
      Type: "Plug Valve",
      Model: "XRP12",
      Connection: "ASA150 Flanged",
    },
  },
  {
    id: 7,
    name: 'Plug Valve 3" 2Way-Xomox',
    image: "/products images/Plug Valve32Way-Xomox.jfif",
    // price: 20300,
    // old_price: 0,
    type: "Industrial Valves",
    desc: `Plug Valve 3" 2Way made with DI Body with SS316 Plug is suitable for Air, Water, Gases.`,
    adddesc: "",
    details: {
      Make: "Xomox",
      Size: '3"',
      Body: "MOC DI",
      Plug: "Moc SS316",
      "End Connection Flanged": "ASA150",
      "Max Operating Pressure": "10Bar",
    },
  },
  {
    id: 8,
    name: 'Plug Valve 1 1/2" 2Way-Xomox',
    image: "/products images/PlugValve1122Way-Xomox.jfif",
    // price: 9500,
    // old_price: 0,
    type: "Industrial Valves",
    desc: `1 1/2" plug valve is a type of valve used to control the flow of liquids or gases in a pipeline. Here are some key features and details of plug valve:`,
    adddesc: "",
    details: {
      Size: '1 1/2"',
      Body: "MOC DI",
      Plug: "Moc SS316",
      Seat: "MOC PTFE Teflon",
      Connection: "ASA150 Flange",
    },
  },
  {
    id: 9,
    name: "PID Controller",
    image: "/products images/PID Controller.jfif",
    // price: 5400,
    // old_price: 0,
    type: "Pneumatic Valves & Actuators",
    desc: `PID Controllers are widely used in all the industries to control the temperatures and automate the process.`,
    adddesc: "",
    details: {
      Make: "RADIX",
      Model: "NEX605",
      Input: "Universal",
      Output: "Relay NO-C-NC",
      Supply: "220VAC",
    },
  },
  {
    id: 10,
    name: "Nitrogen Gas Plant",
    image: "/Nitrogen Gas Plant.JPG",
    // price: 50000,
    // old_price: 0,
    type: "PSA Gas Plants",
    desc: `PSA nitrogen plants produce pure nitrogen gas, essential for various industries. Cost-effective, reliable, and eco-friendly solution for nitrogen needs.
We Design & Supply of Nitrogen gas plants as per your specifications required i.e is upto 1000Nm3/Hr with 99-99.99% Purity.`,
    adddesc: "",
    details: {},
  },
  {
    id: 11,
    name: "Oxygen Gas Plant",
    image: "/wasipsaplant.jpg",
    // price: 50000,
    // old_price: 0,
    type: "PSA Gas Plants",
    desc: `PSA oxygen plants deliver high-purity oxygen. Vital for medical, industrial applications. Efficient, on-site production ensures steady supply, reducing logistics challenges.
We Design & Supply of Nitrogen gas plants as per your specifications required i.e is upto 500Nm3/Hr with 97% Purity.`,
    adddesc: "",
    details: {},
  },
];

export default products;
