/** @jsx jsx */
import { Global } from '@emotion/core';
import { useConfig, useCurrentDoc } from 'docz';
import { Header } from 'gatsby-theme-docz/src/components/Header';
import * as styles from 'gatsby-theme-docz/src/components/Layout/styles';
import { MainContainer } from 'gatsby-theme-docz/src/components/MainContainer';
import { Sidebar } from 'gatsby-theme-docz/src/components/Sidebar';
import { breakpoints } from 'gatsby-theme-docz/src/theme/breakpoints';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { Box, Flex, jsx } from 'theme-ui';
import useExtendedMenus from '../../hooks/useExtendedMenus';
import { Banner } from '~/components/core/Banner';
import Footer from '../Footer';
import NavHeadings from '../NavHeadings';
import { Content, globalStyles } from './custom-styles';
import VideoTutorial from '../VideoTutorial';

export const Layout = ({
  children,
  /*pageContext = {},*/ doc = {},
  ...rest
}) => {
  const {
    themeConfig: { mainContainer: { fullscreen, align = 'center' } = {} },
  } = useConfig();
  const currentDoc = useCurrentDoc();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const menus = useExtendedMenus({ query });

  const handleChange = (ev) => {
    setQuery(ev.target.value);
  };

  const { updated } = doc.value || {};
  const mainStyles = {
    marginLeft: align !== 'left' ? 'auto' : 0,
    marginRight: align !== 'right' ? 'auto' : 0,
    ...(fullscreen ? { maxWidth: 'none' } : undefined),
  };

  return (
    <Flex sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={globalStyles} />
      <Box sx={styles.main}>
        <Header onOpen={() => setOpen((s) => !s)} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={ref}
            open={open}
            menus={menus}
            handleChange={handleChange}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <MainContainer
            style={mainStyles}
            data-testid="main-container"
            doc={doc}
            {...rest}
          >
            <Flex
              sx={{
                width: '100%',
                justifyContent: 'stretch',
                [`@media screen and (max-width: ${breakpoints.desktop}px)`]: {
                  flexDirection: 'column',
                },
              }}
            >
              <Content>
                {/* deprecation notice */}
                {currentDoc && currentDoc.deprecated && (
                  <Banner
                    variant="warning"
                    className="mb-8 max-w-2xl"
                    constrain={false}
                  >
                    {currentDoc.name} is deprecated. Please do not introduce in
                    new code.
                  </Banner>
                )}
                {/* MDX Content */}
                <div className="mdx-content">{children}</div>
                {currentDoc && currentDoc.video && (
                  <VideoTutorial url={currentDoc.video} />
                )}
                <Footer updated={updated} menus={menus} />
              </Content>
              <NavHeadings />
            </Flex>
          </MainContainer>
        </div>
      </Box>
    </Flex>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
  doc: PropTypes.object,
};
