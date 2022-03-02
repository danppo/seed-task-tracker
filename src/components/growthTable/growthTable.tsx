const GrowthTable = () => {
  const plant = {
    name: "name",
    startTimestamp: "time",
    seed: "link to seed catalogue",
    seedWeight: "weight",
    soakTime: "hours",
    plantType: "sprout",
    location: "kitchen window",
    growthMedium: "soil",
    task: [
      {
        action: "mist",
        repeat: {
          morning: true,
          midday: true,
          evening: true,
        },
      },
    ],
    comments: [
      {
        comment: "string",
        timestamp: "date",
      },
    ],
    blackout: {
      startBlackout: "time",
      finishBlackout: "time",
    },
    finishGrowth: "time",
    harvest: [
      {
        timestamp: "date",
        weight: "weight",
      },
    ],
  };

  return <>Table</>;
};

export default GrowthTable;
