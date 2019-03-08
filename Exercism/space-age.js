var planet = {
    'earth': 1, 'mercury': 0.2408467, 'venus': 0.61519726,
    'mars': 1.8808158, 'jupiter':11.862615, 'saturn':29.447498,
    'uranus': 84.016846, 'neptune': 164.79132
}

export const age = (str , sec) => {
    if (str in planet) {
      return Number((sec / planet[str] / 31557600).toFixed(2));
    } else {
        throw new Error('Please enter correct input!');
    }
}
