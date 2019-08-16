import { Meteor } from 'meteor/meteor'
import App from '/imports/client/components/App.svelte'

Meteor.startup(() => {
  new App({
    target: document.querySelector("#root")
  })
})