/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    parts: [
        'container',
        'content',
        'subscribe',
        'subscribeField',
        'subscribeButtonContainer',
        'subscribeHeading',
        'subscribeMessage',
        'localeSelector',
        'bottomHalf',
        'horizontalRule',
        'copyright',
        'socialIcons'
    ],
    baseStyle: {
        container: {
            width: 'full'
        },
        content: {
            maxWidth: 'container.xxl',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            color: 'black',
            paddingTop: {base: 8, lg: 10},
            paddingBottom: 6,
            paddingLeft: [4, 4, 6, 8],
            paddingRight: [4, 4, 6, 8]
        },
        subscribe: {
            maxWidth: {base: '21.5rem', lg: 'none'}
        },
        subscribeField: {
            background: 'white',
            color: 'gray.900'
        },
        subscribeButtonContainer: {
            width: 'auto'
        },
        subscribeHeading: {
            fontSize: 'md',
            marginBottom: 2
        },
        subscribeMessage: {
            fontSize: 'sm',
            marginBottom: 4
        },
        localeSelector: {
            display: 'inline-block',
            marginTop: 8
        },
        localeDropdown: {
            background: 'gray.800',
            _hover: {
                background: 'whiteAlpha.500'
            }
        },
        localeDropdownOption: {
            color: 'black'
        },
        bottomHalf: {
            maxWidth: {base: '34.5rem', lg: '100%'},
            backgroundColor: 'black',
            // height: '10%',
            color: 'gray.50',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        // horizontalRule: {
        //     marginTop: 4,
        //     marginBottom: 4
        // },
        copyright: {
            fontSize: 'xs',
            padding: '10px'
            // position: 'relative',
            // top: '15px',
            // marginBottom: 6
        },
        socialIcons: {
            marginTop: 4
        }
    }
}
