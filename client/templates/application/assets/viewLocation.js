Template.viewLocationPage.onCreated(function() {
  var self = this;
   self.autorun(function() {
     self.subscribe('singleLocation', Session.get('currentID').toString());
   });
   Collections.Locations.Current = Locations.findOne({'id':Session.get('currentID').toString()})
});

Template.viewLocationPage.helpers({
  viewDoc: function() {
    return Collections.Locations.Current;
  }
});

Template.viewLocationPage.events({
  'click #btnViewLocationPageEdit': function(e) {
    if (Session.get('currentID').toString()=== "#"){
      alert("No location or asset selected!")
    }
    else{
      if (Collections.Locations.Current.type === "asset"){
        FlowRouter.go('/assets/edit-asset')
      }
      else{
        FlowRouter.go('/assets/edit-location')
      }
    }
  },
  'click #btnViewLocationPageCopy': function(e) {
    if (Session.get('currentID').toString()=== "#"){
      alert("No location or asset selected!")
    }
    else{
      if (Collections.Locations.Current.type === "asset"){
        FlowRouter.go('/assets/duplicate-asset')
      }
      else{
        FlowRouter.go('/assets/duplicate-location')
      }
    }
  }
});
