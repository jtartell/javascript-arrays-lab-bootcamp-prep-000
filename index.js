var kittens = ["Milo", "Otis", "Garfield"]

function arrays() {
 return kittens
}
console.log(kittens)

function destructivelyAppendKitten() {
  return kittens.push("Ralph")
}
console.log(kittens)

function destructivelyPrependKitten() {
  return kittens.unshift("Bob")
}
console.log(kittens)

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
console.log(kittens)

function destructivelyRemoveFirstKitten() {
  return kittens.shift()}
  
console.log(kittens)

function appendKitten() {
  return [...kittens, "Broom"] }

function prependKitten() {
  return ["Arnold",...kittens]
}

function removeLastKitten() {
  return kitten.slice(1)
}  

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })