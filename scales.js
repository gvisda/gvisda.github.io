const AMinorScale = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const addOctaveNumbers = (scale, octaveNumber) => scale.map(note => {
  const firstOctaveNoteIndex = scale.indexOf('C') !== -1 ? scale.indexOf('C') : scale.indexOf('C#')
  const noteOctaveNumber = scale.indexOf(note) < firstOctaveNoteIndex ? octaveNumber - 1 : octaveNumber;
  return `${note}${noteOctaveNumber}`
});
