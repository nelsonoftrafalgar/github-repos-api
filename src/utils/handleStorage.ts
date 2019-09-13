export const handleStorage = (name: string, value: boolean) => {
  if (localStorage.getItem('added') !== null) {
    let storageAdded = JSON.parse(localStorage.getItem('added') as string)
    if (!value) {
      storageAdded.push(name)
    } else {
      storageAdded = storageAdded.filter((item: string) => item !== name)
    }
    window.localStorage.setItem('added', JSON.stringify(storageAdded))
  } else {
    if (!value) {
      const added = []
      added.push(name)
      window.localStorage.setItem('added', JSON.stringify(added))
    }
  }
}