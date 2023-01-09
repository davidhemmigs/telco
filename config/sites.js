// Provide the sites for your app. Each site includes site id, and its localization configuration.
// You can also provide aliases for your locale. They will be used in place of your locale id when generating paths across the app
/*eslint-disable*/
module.exports = [
    {
        id: 'RefArch',
        l10n: {
            supportedCurrencies: ['USD'],
            defaultCurrency: 'USD',
            defaultLocale: 'en-US',
            supportedLocales: [
                {
                    id: 'en-US',
                    // alias: 'us',
                    preferredCurrency: 'USD'
                }
                // {
                //     id: 'en-GB',
                //     preferredCurrency: 'EUR'
                // }
            ]
        }
    },
    // {
    //     id: 'RefArchGlobal',
    //     l10n: {
    //         supportedCurrencies: ['EUR'],
    //         defaultCurrency: 'EUR',
    //         defaultLocale: 'de-DE',
    //         supportedLocales: [
    //             {
    //                 id: 'de-DE',
    //                 alias: 'de',
    //                 preferredCurrency: 'EUR'
    //             }
    //         ]
    //     }
    // }
]