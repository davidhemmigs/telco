/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Text,
    Divider,
    SimpleGrid,
    useMultiStyleConfig,
    StylesProvider,
    Select,
    useStyles,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    FormControl
} from '@chakra-ui/react'
import {useIntl} from 'react-intl'

import LinksList from '../links-list'
import SocialIcons from '../social-icons'
import {HideOnDesktop, HideOnMobile} from '../responsive'
import {getPathWithLocale} from '../../utils/url'
import LocaleText from '../locale-text'
import useMultiSite from '../../hooks/use-multi-site'
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'

const Footer = ({...otherProps}) => {
    const styles = useMultiStyleConfig('Footer')
    const intl = useIntl()
    const [locale, setLocale] = useState(intl.locale)
    const {site, buildUrl} = useMultiSite()
    const {l10n} = site

    const supportedLocaleIds = l10n?.supportedLocales.map((locale) => locale.id)
    const showLocaleSelector = supportedLocaleIds?.length > 1
    const image = getAssetUrl('static/img/global/fondoFooter.png')

    return (
        <Box as="footer" {...styles.container} {...otherProps}>
            <Divider />
            <Box {...styles.content} style={{backgroundImage: `url(${image})`}}>
                <HideOnMobile>
                    <SimpleGrid
                        columns={4}
                        spacing={2}
                        style={{
                            width: '80%',
                            margin: 'auto'
                        }}
                    >
                        <Box>
                            <img
                                style={{width: '150px', height: 'auto'}}
                                src={getAssetUrl('static/img/global/Labs-logo.png')}
                                alt=""
                            />
                            <Text style={{marginTop: '30px'}} fontSize="xs">
                                We develop agile solutions aimed at the rapid digital transformation
                                of our clients
                            </Text>
                            <Text style={{marginTop: '40px'}} fontSize="xs">
                                acelerador@telco.com
                            </Text>
                        </Box>
                        {/* <LinksList
                            heading={intl.formatMessage({
                                id: 'footer.column.customer_support',
                                defaultMessage: 'Customer Support'
                            })}
                            links={[
                                {
                                    href: '/',
                                    text: intl.formatMessage({
                                        id: 'footer.link.contact_us',
                                        defaultMessage: 'Contact Us'
                                    })
                                },
                                {
                                    href: '/',
                                    text: intl.formatMessage({
                                        id: 'footer.link.shipping',
                                        defaultMessage: 'Shipping'
                                    })
                                }
                            ]}
                        /> */}
                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <LinksList
                                heading="Services"
                                links={[
                                    {
                                        href: '/',
                                        text: 'Home'
                                    },
                                    {
                                        href: '/',
                                        text: 'Internet'
                                    },
                                    {
                                        href: '/',
                                        text: 'Family plan'
                                    },
                                    {
                                        href: '/',
                                        text: 'Premium'
                                    },
                                    {
                                        href: '/',
                                        text: 'Channels'
                                    }
                                ]}
                            />
                        </Box>
                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <LinksList
                                heading="Help"
                                links={[
                                    {
                                        href: '/',
                                        text: 'Branch offices'
                                    },
                                    {
                                        href: '/',
                                        text: 'Phones'
                                    },
                                    {
                                        href: '/',
                                        text: 'Privacy policy'
                                    }
                                ]}
                            />
                        </Box>
                        <Box>
                            <LinksList
                                heading="Our Address"
                                links={[
                                    {
                                        href: '/',
                                        text: 'Esmeralda 910 - B.A. Argentina'
                                    }
                                ]}
                            />
                            {/* <Text> Our Address</Text>
                                <Text> Esmeralda 910 - B.A. Argentina</Text> */}
                            <SocialIcons
                                variant="flex-start"
                                pinterestInnerColor="black"
                                {...styles.socialIcons}
                            />
                            {/* <Subscribe /> */}
                        </Box>
                    </SimpleGrid>
                </HideOnMobile>
                <HideOnDesktop>{/* <Subscribe /> */}</HideOnDesktop>
                {showLocaleSelector && (
                    <Box {...styles.localeSelector}>
                        <FormControl
                            data-testid="sf-footer-locale-selector"
                            id="locale_selector"
                            width="auto"
                            {...otherProps}
                        >
                            <Select
                                value={locale}
                                onChange={({target}) => {
                                    setLocale(target.value)

                                    // Update the `locale` in the URL.
                                    const newUrl = getPathWithLocale(target.value, buildUrl, {
                                        disallowParams: ['refine']
                                    })

                                    window.location = newUrl
                                }}
                                variant="filled"
                                {...styles.localeDropdown}
                            >
                                {supportedLocaleIds.map((locale) => (
                                    <LocaleText
                                        as="option"
                                        value={locale}
                                        shortCode={locale}
                                        key={locale}
                                        {...styles.localeDropdownOption}
                                    />
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                )}
            </Box>
            <Box {...styles.bottomHalf}>
                <Text {...styles.copyright}>
                    &copy; LabsXD All rights reserved
                    {/* {intl.formatMessage({
                        id: 'footer.message.copyright',
                        defaultMessage:
                            'Salesforce or its affiliates. All rights reserved. This is a demo store only. Orders made WILL NOT be processed.'
                    })} */}
                </Text>

                {/* <HideOnDesktop>
                    <LegalLinks variant="vertical" />
                </HideOnDesktop>
                <HideOnMobile>
                    <LegalLinks variant="horizontal" />
                </HideOnMobile> */}
            </Box>
        </Box>
    )
}

export default Footer

const Subscribe = ({...otherProps}) => {
    const styles = useStyles()
    const intl = useIntl()

    return (
        <Box {...styles.subscribe} {...otherProps}>
            <Heading {...styles.subscribeHeading}>
                {intl.formatMessage({
                    id: 'footer.subscribe.heading.first_to_know',
                    defaultMessage: 'Be the first to know'
                })}
            </Heading>
            <Text {...styles.subscribeMessage}>
                {intl.formatMessage({
                    id: 'footer.subscribe.description.sign_up',
                    defaultMessage: 'Sign up to stay in the loop about the hottest deals'
                })}
            </Text>

            <Box>
                <InputGroup>
                    <Input type="email" placeholder="you@email.com" {...styles.subscribeField} />
                    <InputRightElement {...styles.subscribeButtonContainer}>
                        <Button variant="footer">
                            {intl.formatMessage({
                                id: 'footer.subscribe.button.sign_up',
                                defaultMessage: 'Sign Up'
                            })}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>

            <SocialIcons variant="flex-start" pinterestInnerColor="black" {...styles.socialIcons} />
        </Box>
    )
}

const LegalLinks = ({variant}) => {
    const intl = useIntl()
    return (
        <LinksList
            links={[
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.terms_conditions',
                        defaultMessage: 'Terms & Conditions'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.privacy_policy',
                        defaultMessage: 'Privacy Policy'
                    })
                },
                {
                    href: '/',
                    text: intl.formatMessage({
                        id: 'footer.link.site_map',
                        defaultMessage: 'Site Map'
                    })
                }
            ]}
            color="gray.200"
            variant={variant}
        />
    )
}
LegalLinks.propTypes = {
    variant: PropTypes.oneOf(['vertical', 'horizontal'])
}
