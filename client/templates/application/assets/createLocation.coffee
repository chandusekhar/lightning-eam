Template.createLocationPage.helpers
  customTemplate: -> Customisations.createLocation
  parentID: -> Session.get 'currentID'
  locationFormSchema: -> Schema.locations
  locationType: ->
    if (Session.get 'currentID') == '#'
      type = 'database'
    else
      type = 'location'
    return type

Template.createLocationPage.onRendered ->
  $('.tooltipped').tooltip {delay: 50}

Template.createLocationPage.onDestroyed ->
  $('.tooltipped').tooltip 'remove'
