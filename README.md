# accounts-office365

A login service for Microsoft Office 365 accounts.

This package is a fork of `lindoelio:accounts-office365` extended to support refresh tokens.

## Getting Started

Add package to your project.
```shellscript
meteor add ermlab:accounts-office365
```

Setup the service configuration for your [Microsoft Office 365 application](https://apps.dev.microsoft.com).
```javascript
  ServiceConfiguration.configurations.upsert({service: 'office365'}, {
    $set: {
      clientId: 'Your_Office365_Application_ClientID',
      secret: 'Your_Office365_Application_Secret',
      tenant: 'Your_Tenant' // or 'common' for not specific tenant
    }
  })
```

This package depends of other base package named ermlab:office365-oauth, which will be automatically added in your packages.

Enjoy the [Microsoft Graph](https://developer.microsoft.com/en-us/graph/docs/concepts/overview)! :-)
