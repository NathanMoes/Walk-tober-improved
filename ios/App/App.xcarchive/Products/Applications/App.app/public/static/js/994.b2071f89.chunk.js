"use strict";(self.webpackChunkwalktober=self.webpackChunkwalktober||[]).push([[994],{994:function(e,t,n){n.r(t),n.d(t,{GoogleAuthWeb:function(){return c}});var r=n(4165),a=n(5861),i=n(5671),s=n(3144),o=n(136),u=n(9388),c=function(e){(0,o.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,i.Z)(this,n),t.call(this)}return(0,s.Z)(n,[{key:"loadScript",value:function(){if("undefined"!==typeof document){var e="gapi";if(!(null===document||void 0===document?void 0:document.getElementById(e))){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.defer=!0,n.async=!0,n.id=e,n.onload=this.platformJsLoaded.bind(this),n.src="https://apis.google.com/js/platform.js",t.appendChild(n)}}}},{key:"initialize",value:function(){var e,t,n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{clientId:"",scopes:[],grantOfflineAccess:!1};if("undefined"!==typeof window){var a=null===(e=document.getElementsByName("google-signin-client_id")[0])||void 0===e?void 0:e.content,i=r.clientId||a||"";i||console.warn("GoogleAuthPlugin - clientId is empty"),this.options={clientId:i,grantOfflineAccess:null!==(t=r.grantOfflineAccess)&&void 0!==t&&t,scopes:r.scopes||[]},this.gapiLoaded=new Promise((function(e){window.gapiResolve=e,n.loadScript()})),this.addUserChangeListener()}}},{key:"platformJsLoaded",value:function(){var e=this;gapi.load("auth2",(function(){var t={client_id:e.options.clientId,plugin_name:"CodetrixStudioCapacitorGoogleAuth"};e.options.scopes.length&&(t.scope=e.options.scopes.join(" ")),gapi.auth2.init(t),window.gapiResolve()}))}},{key:"signIn",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,a){var i,s,o,u,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(o=null!==(i=t.options.grantOfflineAccess)&&void 0!==i&&i)){e.next=9;break}return e.next=5,gapi.auth2.getAuthInstance().grantOfflineAccess();case 5:u=e.sent,s=u.code,e.next=11;break;case 9:return e.next=11,gapi.auth2.getAuthInstance().signIn();case 11:if(c=gapi.auth2.getAuthInstance().currentUser.get(),!o){e.next=15;break}return e.next=15,c.reloadAuthResponse();case 15:(l=t.getUserFrom(c)).serverAuthCode=s,n(l),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),a(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();case 2:return t=e.sent,e.abrupt("return",{accessToken:t.access_token,idToken:t.id_token,refreshToken:""});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"signOut",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",gapi.auth2.getAuthInstance().signOut());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addUserChangeListener",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t=this;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.gapiLoaded;case 2:gapi.auth2.getAuthInstance().currentUser.listen((function(e){t.notifyListeners("userChange",e.isSignedIn()?t.getUserFrom(e):null)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserFrom",value:function(e){var t={},n=e.getBasicProfile();t.email=n.getEmail(),t.familyName=n.getFamilyName(),t.givenName=n.getGivenName(),t.id=n.getId(),t.imageUrl=n.getImageUrl(),t.name=n.getName();var r=e.getAuthResponse(!0);return t.authentication={accessToken:r.access_token,idToken:r.id_token,refreshToken:""},t}}]),n}(n(6653).Uw)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5RixJQUFHLGdEQUNKLGtEQVBBLElBT0EseUJBRU8sU0FBWUEsR0FDbEIsSUFBTUksRUFBTyxHQUNQWSxFQUFVaEIsRUFBV2lCLGtCQUUzQmIsRUFBS2MsTUFBUUYsRUFBUUcsV0FDckJmLEVBQUtnQixXQUFhSixFQUFRSyxnQkFDMUJqQixFQUFLa0IsVUFBWU4sRUFBUU8sZUFDekJuQixFQUFLNUMsR0FBS3dELEVBQVFRLFFBQ2xCcEIsRUFBS3FCLFNBQVdULEVBQVFVLGNBQ3hCdEIsRUFBS3VCLEtBQU9YLEVBQVFZLFVBRXBCLElBQU10QixFQUFlTixFQUFXNkIsaUJBQWdCLEdBT2hELE9BTkF6QixFQUFLMEIsZUFBaUIsQ0FDcEJ2QixZQUFhRCxFQUFhRSxhQUMxQkMsUUFBU0gsRUFBYUksU0FDdEJDLGFBQWMsSUFHVFAsQ0FDVCxLQUFDLEVBdEp3QixDLFFBQVEyQixHIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2ViLnRzIl0sIm5hbWVzIjpbIkdvb2dsZUF1dGhXZWIiLCJkb2N1bWVudCIsInNjcmlwdElkIiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImRlZmVyIiwiYXN5bmMiLCJpZCIsIm9ubG9hZCIsInBsYXRmb3JtSnNMb2FkZWQiLCJiaW5kIiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJfb3B0aW9ucyIsImNsaWVudElkIiwic2NvcGVzIiwiZ3JhbnRPZmZsaW5lQWNjZXNzIiwid2luZG93IiwibWV0YUNsaWVudElkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJjb250ZW50IiwiY29uc29sZSIsIndhcm4iLCJvcHRpb25zIiwiZ2FwaUxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2FwaVJlc29sdmUiLCJsb2FkU2NyaXB0IiwiYWRkVXNlckNoYW5nZUxpc3RlbmVyIiwiZ2FwaSIsImxvYWQiLCJjbGllbnRDb25maWciLCJjbGllbnRfaWQiLCJwbHVnaW5fbmFtZSIsImxlbmd0aCIsInNjb3BlIiwiam9pbiIsImF1dGgyIiwiaW5pdCIsInJlamVjdCIsIm5lZWRzT2ZmbGluZUFjY2VzcyIsImdldEF1dGhJbnN0YW5jZSIsIm9mZmxpbmVBY2Nlc3NSZXNwb25zZSIsInNlcnZlckF1dGhDb2RlIiwiY29kZSIsInNpZ25JbiIsImdvb2dsZVVzZXIiLCJjdXJyZW50VXNlciIsImdldCIsInJlbG9hZEF1dGhSZXNwb25zZSIsInVzZXIiLCJnZXRVc2VyRnJvbSIsImF1dGhSZXNwb25zZSIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiaWRUb2tlbiIsImlkX3Rva2VuIiwicmVmcmVzaFRva2VuIiwic2lnbk91dCIsImxpc3RlbiIsIm5vdGlmeUxpc3RlbmVycyIsImlzU2lnbmVkSW4iLCJwcm9maWxlIiwiZ2V0QmFzaWNQcm9maWxlIiwiZW1haWwiLCJnZXRFbWFpbCIsImZhbWlseU5hbWUiLCJnZXRGYW1pbHlOYW1lIiwiZ2l2ZW5OYW1lIiwiZ2V0R2l2ZW5OYW1lIiwiZ2V0SWQiLCJpbWFnZVVybCIsImdldEltYWdlVXJsIiwibmFtZSIsImdldE5hbWUiLCJnZXRBdXRoUmVzcG9uc2UiLCJhdXRoZW50aWNhdGlvbiIsIldlYlBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=