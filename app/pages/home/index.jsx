/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
// import {useIntl} from 'react-intl'
import {useLocation} from 'react-router-dom'

// Components
import {
    Box,
    Button,
    // SimpleGrid,
    // HStack,
    // VStack,
    // Text,
    // Flex,
    // Link
    // Container,
    Stack,
    Input,
    SimpleGrid,
    Text,
    VStack,
    Center
} from '@chakra-ui/react'

// Project Components
// import Hero from '../../components/hero'
import Seo from '../../components/seo'
import {HideOnMobile, HideOnDesktop} from '../../components/responsive'
import Section from '../../components/section'
import ProductScroller from '../../components/product-scroller'

// Others
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
// import {heroFeatures, features} from './data'

//Hooks
import useEinstein from '../../commerce-api/hooks/useEinstein'

// Constants
import {
    MAX_CACHE_AGE,
    HOME_SHOP_PRODUCTS_CATEGORY_ID,
    HOME_SHOP_PRODUCTS_LIMIT
} from '../../constants'

/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */
const Home = ({productSearchResult, isLoading}) => {
    // const intl = useIntl()
    const einstein = useEinstein()
    const {pathname} = useLocation()

    /**************** Einstein ****************/
    useEffect(() => {
        einstein.sendViewPage(pathname)
    }, [])

    const image = getAssetUrl('static/img/global/iphone_13_pro_max.png')
    const image2 = getAssetUrl('static/img/global/ondas_fondo_newsletter.png')
    const BannerImg = getAssetUrl('static/img/global/banner.png')
    const BannerMobileImg = getAssetUrl('static/img/global/banner_mobile.png')
    const IphoneImg = getAssetUrl('static/img/global/iPhone.png')
    const RectangleImg = getAssetUrl('static/img/global/Rectangle.png')

    return (
        <Box>
            {/* <div style={{width: '100%'}}>
                <div style={{fontSize: '3rem', position: 'absolute', top: '180px', left: '160px'}}>
                    <p>The best products</p>
                    <p style={{color: 'red'}}>the best prices</p>
                </div>
                <Button
                    style={{position: 'absolute', top: '350px', left: '160px'}}
                    size="lg"
                    color="red"
                    variant="outline"
                >
                    Shop now!!
                </Button>
                <img
                    style={{width: '100%'}}
                    src={getAssetUrl('static/img/global/banner.png')}
                    alt="banner img"
                />
            </div> */}
            <HideOnMobile>
                <Box
                    backgroundImage={BannerImg}
                    height="465px"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                >
                    <Center width="50%" height="90%">
                        <VStack spacing={{base: 3, sm: 2}} align="flex-start">
                            <Text fontSize="5xl">The best products</Text>
                            <Text fontSize="5xl" color="red">
                                the best prices
                            </Text>
                            <Button width="200px" color="red" variant="outline">
                                Shop now!!
                            </Button>
                        </VStack>
                    </Center>
                </Box>
            </HideOnMobile>
            <HideOnDesktop>
                <Box height="500px" backgroundImage={BannerMobileImg} backgroundSize="cover">
                    <Box margin="auto" width="60%" paddingTop="250px">
                        <VStack spacing={2} align="flex-start">
                            <Text fontSize="lg">The best products</Text>
                            <Text fontSize="lg" color="red">
                                the best prices
                            </Text>
                            <Button width="150px" color="red" variant="outline">
                                Shop now!!
                            </Button>
                        </VStack>
                    </Box>
                </Box>
            </HideOnDesktop>

            <Box data-testid="home-page" layerStyle="page" w="100%">
                <Seo
                    title="Home Page"
                    description="Commerce Cloud Retail React App"
                    keywords="Commerce Cloud, Retail React App, React Storefront"
                />

                {/* <Hero
                title={intl.formatMessage({
                    defaultMessage: 'The React PWA Starter Store for Retail',
                    id: 'home.title.react_starter_store'
                })}
                img={{
                    src: getAssetUrl('static/img/hero.png'),
                    alt: 'npx pwa-kit-create-app'
                }}
                actions={
                    <Stack spacing={{base: 4, sm: 6}} direction={{base: 'column', sm: 'row'}}>
                        <Button
                            as={Link}
                            href="https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"
                            target="_blank"
                            width={{base: 'full', md: 'inherit'}}
                            paddingX={7}
                            _hover={{textDecoration: 'none'}}
                        >
                            <FormattedMessage
                                defaultMessage="Get started"
                                id="home.link.get_started"
                            />
                        </Button>
                    </Stack>
                }
            /> */}

                <div style={{display: 'flex', width: '88%', margin: 'auto', height: '400px'}}>
                    <div
                        style={{
                            width: '50%'
                        }}
                    >
                        <img
                            style={{position: 'relative', left: '70px', height: '100%'}}
                            src={getAssetUrl('static/img/global/iPhone.png')}
                            alt=""
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50%',
                            position: 'relative',
                            right: '30px'
                        }}
                    >
                        <div style={{display: 'flex'}}>
                            <div style={{width: '50%', margin: '2px'}}>
                                <img
                                    src={getAssetUrl('static/img/global/Rectangle.png')}
                                    alt="rectangle"
                                />
                            </div>
                            <div style={{width: '50%', margin: '2px'}}>
                                <img
                                    src={getAssetUrl('static/img/global/dresses_category.png')}
                                    alt="dresses"
                                />
                            </div>
                        </div>
                        <div style={{margin: '2px'}}>
                            <img
                                style={{height: '100%'}}
                                src={getAssetUrl('static/img/global/Samsung.png')}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <Box height="400px" width="75%" margin="auto">
                    <SimpleGrid columns={2} spacing={2}>
                        <Box bgImage={IphoneImg} bgSize="100% 100%" height="400px">
                            1
                        </Box>
                        <Box bg="yellow">
                            <Box h="50%">
                                <SimpleGrid columns={2} spacing={2}>
                                    <Box h="200px" bgImage={RectangleImg} bgSize="100% 100%">
                                        2hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                                    </Box>
                                    <Box>3</Box>
                                </SimpleGrid>
                            </Box>
                            <Box bg="pink" h="50%">
                                4
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
            <div>
                <div
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        height: '500px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: '1.5',
                            width: '50%'
                        }}
                    >
                        <div>
                            <h1 style={{fontSize: '30px'}}>LEARN HOW EVERYONE GETS</h1>
                            <h1 style={{fontSize: '40px', color: 'red'}}>IPhone 13 Pro Max</h1>
                            <h1 style={{fontSize: '40px'}}>for up to $800 off</h1>
                            <p style={{fontSize: '20px'}}>See offer details</p>
                            <Button colorScheme="red" size="lg">
                                Buy
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Box layerStyle="page">
                {/* <Section
                    background={'gray.50'}
                    marginX="auto"
                    paddingY={{base: 8, md: 16}}
                    paddingX={{base: 4, md: 8}}
                    borderRadius="base"
                    width={{base: '100vw', md: 'inherit'}}
                    position={{base: 'relative', md: 'inherit'}}
                    left={{base: '50%', md: 'inherit'}}
                    right={{base: '50%', md: 'inherit'}}
                    marginLeft={{base: '-50vw', md: 'auto'}}
                    marginRight={{base: '-50vw', md: 'auto'}}
                >
                    <SimpleGrid
                        columns={{base: 1, md: 1, lg: 3}}
                        spacingX={{base: 1, md: 4}}
                        spacingY={{base: 4, md: 14}}
                    >
                        {heroFeatures.map((feature, index) => {
                            const featureMessage = feature.message
                            return (
                                <Box
                                    key={index}
                                    background={'white'}
                                    boxShadow={'0px 2px 2px rgba(0, 0, 0, 0.1)'}
                                    borderRadius={'4px'}
                                >
                                    <Link target="_blank" href={feature.href}>
                                        <HStack>
                                            <Flex
                                                paddingLeft={6}
                                                height={24}
                                                align={'center'}
                                                justify={'center'}
                                            >
                                                {feature.icon}
                                            </Flex>
                                            <Text fontWeight="700">
                                                {intl.formatMessage(featureMessage.title)}
                                            </Text>
                                        </HStack>
                                    </Link>
                                </Box>
                            )
                        })}
                    </SimpleGrid>
                </Section> */}

                {/* muestra una sección con productos tomados del catalogo activo  */}
                {productSearchResult && (
                    <Section
                        padding={4}
                        paddingTop={16}
                        title="Most recent products"
                        // subtitle={intl.formatMessage(
                        //     {
                        //         defaultMessage:
                        //             'This section contains content from the catalog. {docLink} on how to replace it.',
                        //         id: 'home.description.shop_products',
                        //         description:
                        //             '{docLink} is a html button that links the user to https://sfdc.co/business-manager-manage-catalogs'
                        //     },
                        //     {
                        //         docLink: (
                        //             <Link
                        //                 target="_blank"
                        //                 href={'https://sfdc.co/business-manager-manage-catalogs'}
                        //                 textDecoration={'none'}
                        //                 position={'relative'}
                        //                 _after={{
                        //                     position: 'absolute',
                        //                     content: `""`,
                        //                     height: '2px',
                        //                     bottom: '-2px',
                        //                     margin: '0 auto',
                        //                     left: 0,
                        //                     right: 0,
                        //                     background: 'gray.700'
                        //                 }}
                        //                 _hover={{textDecoration: 'none'}}
                        //             >
                        //                 {intl.formatMessage({
                        //                     defaultMessage: 'Read docs',
                        //                     id: 'home.link.read_docs'
                        //                 })}
                        //             </Link>
                        //         )
                        //     }
                        // )}
                    >
                        <Stack pt={8} spacing={16}>
                            <ProductScroller
                                products={productSearchResult?.hits}
                                isLoading={isLoading}
                            />
                        </Stack>
                    </Section>
                )}

                {/* muestra una sección con productos tomados del catalogo activo  */}
                <HideOnMobile>
                    <div
                        style={{
                            backgroundImage: `url(${image2})`,
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '30px',
                            height: '235px',
                            width: '1030px',
                            margin: 'auto',
                            marginTop: '100px',
                            display: 'flex'
                        }}
                    >
                        <div
                            style={{
                                width: '55%',
                                fontSize: '35px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column'
                            }}
                        >
                            <h1 style={{color: 'white'}}>
                                <span style={{fontWeight: '600', color: 'black'}}>Subscribe</span>{' '}
                                and get 15% discount
                            </h1>
                            <Input
                                style={{backgroundColor: 'white', width: '65%'}}
                                variant="outline"
                                focusBorderColor="black"
                                placeholder="Email"
                                size="sm"
                            />
                        </div>
                        <img
                            style={{marginLeft: '80px', marginBottom: '1.5px'}}
                            src={getAssetUrl('static/img/global/business_newsletter.png')}
                            alt=""
                        />
                    </div>
                </HideOnMobile>

                {/* <Section
                    padding={4}
                    paddingTop={32}
                    title={intl.formatMessage({
                        defaultMessage: 'Features',
                        id: 'home.heading.features'
                    })}
                    subtitle={intl.formatMessage({
                        defaultMessage:
                            'Out-of-the-box features so that you focus only on adding enhancements.',
                        id: 'home.description.features'
                    })}
                >
                    <Container maxW={'6xl'} marginTop={10}>
                        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
                            {features.map((feature, index) => {
                                const featureMessage = feature.message
                                return (
                                    <HStack key={index} align={'top'}>
                                        <VStack align={'start'}>
                                            <Flex
                                                width={16}
                                                height={16}
                                                align={'center'}
                                                justify={'left'}
                                                color={'gray.900'}
                                                paddingX={2}
                                            >
                                                {feature.icon}
                                            </Flex>
                                            <Text color={'black'} fontWeight={700} fontSize={20}>
                                                {intl.formatMessage(featureMessage.title)}
                                            </Text>
                                            <Text color={'black'}>
                                                {intl.formatMessage(featureMessage.text)}
                                            </Text>
                                        </VStack>
                                    </HStack>
                                )
                            })}
                        </SimpleGrid>
                    </Container>
                </Section> */}

                {/* <Section
                    padding={4}
                    paddingTop={32}
                    title={intl.formatMessage({
                        defaultMessage: "We're here to help",
                        id: 'home.heading.here_to_help'
                    })}
                    subtitle={
                        <>
                            <>
                                {intl.formatMessage({
                                    defaultMessage: 'Contact our support staff.',
                                    id: 'home.description.here_to_help'
                                })}
                            </>
                            <br />
                            <>
                                {intl.formatMessage({
                                    defaultMessage: 'They will get you to the right place.',
                                    id: 'home.description.here_to_help_line_2'
                                })}
                            </>
                        </>
                    }
                    actions={
                        <Button
                            as={Link}
                            href="https://help.salesforce.com/s/?language=en_US"
                            target="_blank"
                            width={'auto'}
                            paddingX={7}
                            _hover={{textDecoration: 'none'}}
                        >
                            <FormattedMessage
                                defaultMessage="Contact Us"
                                id="home.link.contact_us"
                            />
                        </Button>
                    }
                    maxWidth={'xl'}
                /> */}
            </Box>
        </Box>
    )
}

Home.getTemplateName = () => 'home'

Home.shouldGetProps = ({previousLocation, location}) =>
    !previousLocation || previousLocation.pathname !== location.pathname

Home.getProps = async ({res, api}) => {
    if (res) {
        res.set('Cache-Control', `max-age=${MAX_CACHE_AGE}`)
    }

    const productSearchResult = await api.shopperSearch.productSearch({
        parameters: {
            refine: [`cgid=${HOME_SHOP_PRODUCTS_CATEGORY_ID}`, 'htype=master'],
            limit: HOME_SHOP_PRODUCTS_LIMIT
        }
    })

    return {productSearchResult}
}

Home.propTypes = {
    /**
     * The search result object showing all the product hits, that belong
     * in the supplied category.
     */
    productSearchResult: PropTypes.object,
    /**
     * The current state of `getProps` when running this value is `true`, otherwise it's
     * `false`. (Provided internally)
     */
    isLoading: PropTypes.bool
}

export default Home
