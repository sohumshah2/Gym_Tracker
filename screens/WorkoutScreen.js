
const mock = [
  {
    num: 1, 
    name: 'squat',
    image: 'link...',
    notes: 'some text',
    increment: 1.25,
    numSets: 3,
    currentReps: 6,
    currentWeight: 20,
    defaultRestSeconds: 120,
    history: [
      {
        date: 'date format',
        sets: [
          {
            reps: 6,
            weight: 18.75,
            restSeconds: 120, 
          },
          {
            reps: 6,
            weight: 18.75,
            restSeconds: 184,
          },
          {
            reps: 6,
            weight: 18.75,
            restSeconds: -1,
          }
        ]
      }
    ]    
  }
]