import * as rpg from './rpg.js'

const RESULT=document.querySelector('#result')
const CLASSES=['Fighter','Ranger','Warlock','Druid']

export function create(){
  let classes=rpg.shuffle(CLASSES).slice(2).sort().join('/').toLowerCase()
  RESULT.textContent=`Character is a ${classes}.`
}
