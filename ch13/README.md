# Surviving events

## Binding and unbinding event handlers

Under the DOM Level 2 Event Model, we bind and unbind event handlers with the standard `addEventListener()` and 
`removeEventListener()` methods for modern DOM compliant browsers, and the `attachEvent()` and `detachEvent()` methods
 in legacy versions of Internet Explorer (IE9 <).
 
Events propagate from the even target up to the root of the DOM during the bubble phase, and then they traverse down 
the tree back to the target during the capture phase.
  
