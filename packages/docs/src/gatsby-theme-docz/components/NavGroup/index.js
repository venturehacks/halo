/** @jsx jsx */
import { useConfig, useCurrentDoc } from 'docz';
import { ChevronDown } from 'gatsby-theme-docz/src/components/Icons';
import * as styles from 'gatsby-theme-docz/src/components/NavGroup/styles';
import { NavLink } from 'gatsby-theme-docz/src/components/NavLink';
import { Tag } from '~/components/core/Tag';
import { get } from 'lodash/fp';
import PropTypes from 'prop-types';
import React from 'react';
import { jsx } from 'theme-ui';
import { NO_GROUP } from '../../hooks/useExtendedMenus';
import { Container } from './custom-styles';

export const NavGroup = ({ item, sidebarRef }) => {
  const { menuDisplayName = {} } = useConfig();
  const currentDoc = useCurrentDoc();
  const currentDocRef = React.useRef();
  const { name, menu, extendedMenu } = item;
  const [subheadingsVisible, setShowsubheadings] = React.useState(
    currentDoc.menu === name || currentDoc.submenu === name,
  );
  const toggleSubheadings = () => setShowsubheadings(!subheadingsVisible);
  React.useEffect(() => {
    if (sidebarRef.current && currentDocRef.current) {
      sidebarRef.current.scrollTo(0, currentDocRef.current.offsetTop);
    }
  }, [sidebarRef]);

  const visible = menu && menu.length && subheadingsVisible;

  let menuUi = null;
  if (visible) {
    // has sub-menus
    const items = extendedMenu || [{ name: NO_GROUP, menu }];
    menuUi = items.map((inlineMenu) => {
      if (inlineMenu.name === NO_GROUP) {
        return inlineMenu.menu.map((submenu) => {
          console.log('submenu');
          console.log(submenu);
          if (currentDoc.route === submenu.route) {
            return (
              <NavLink key={submenu.id} item={submenu} ref={currentDocRef}>
                <span className={submenu.deprecated && 'text-dark-a'}>
                  {get(submenu.name, menuDisplayName) || submenu.name}
                </span>

                {submenu.deprecated && (
                  <Tag size="xs" color="gray" className="ml-2">
                    deprecated
                  </Tag>
                )}

                {submenu.new && (
                  <Tag
                    color="green"
                    size="xs"
                    className="ml-2 relative -top-0.5"
                    clearBackground
                  >
                    new
                  </Tag>
                )}
              </NavLink>
            );
          }
          return (
            <NavLink key={submenu.id} item={submenu}>
              <span className={submenu.deprecated && 'text-dark-a'}>
                {get(submenu.name, menuDisplayName) || submenu.name}
              </span>
              {submenu.deprecated && (
                <Tag size="xs" color="gray" className="ml-2">
                  deprecated
                </Tag>
              )}
              {submenu.new && (
                <Tag
                  color="green"
                  size="xs"
                  className="ml-2 relative -top-0.5"
                  clearBackground
                >
                  new
                </Tag>
              )}
            </NavLink>
          );
        });
      }
      return (
        <NavGroup
          key={`inlineMenu-${inlineMenu.name}`}
          item={inlineMenu}
          sidebarRef={sidebarRef}
        />
      );
    });
  }

  return (
    <Container sx={{ ...styles.wrapper, my: 0 }} data-testid="nav-group">
      <button
        className="nav-button"
        sx={styles.title}
        onClick={toggleSubheadings}
      >
        {get(name, menuDisplayName) || name}
        <ChevronDown sx={styles.chevron({ active: subheadingsVisible })} />
      </button>
      <div sx={{ ml: 3 }} data-testid="nav-group-links">
        {menuUi}
      </div>
    </Container>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
  sidebarRef: PropTypes.object,
};
