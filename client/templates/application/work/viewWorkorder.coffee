Template.viewWorkorderPage.onRendered ->
  $('.tooltipped').tooltip {delay: 50}

Template.viewWorkorderPage.onDestroyed ->
  $('.tooltipped').tooltip 'remove'

Template.viewWorkorderPage.helpers
  customTemplate: -> Customisations.viewAsset
  viewDoc: -> Collections.Workorders.Current
  workorderFormSchema: -> Schema.workorders