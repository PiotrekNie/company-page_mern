import React from "react";
import "./App.scss";
import styled from "styled-components";
import { HomePage } from "./app/containers/HomePage";
import tw from "twin.macro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./app/components/navbar";
import { COLORS } from "./app/components/colors";
import { SCREENS } from "./app/components/responsive";
import { ProductCategory } from "./app/containers/ProductCategory";

/**
 *  Images
 */
import BackgroundBottom from "./app/assets/images/background-bottom.jpg";
import { Footer } from "./app/components/footer";
import { ProductPage } from "./app/containers/ProductsPage";

const AppContainer = styled.div`
  background: linear-gradient(to bottom, #fecd4d 0%, #ef647b 100%);
  ${tw`
    flex
    flex-col
    w-full
    h-full
    p-3
    xl:p-6
  `}
`;

const AppContainerBg = styled.img`
  transform: translateX(-50%);
  ${tw`
    absolute left-1/2 bottom-0 pointer-events-none -z-10 w-full overflow-x-hidden
  `}
`;

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    bg-white
    shadow-2xl
    px-3
    xl:px-0
    relative
    z-10
  `}
  &:after {
    content: "";
    background-image: repeating-linear-gradient(
      to right,
      rgba(${COLORS.gray[600]}, 0.06),
      rgba(${COLORS.gray[600]}, 0.06) 1px,
      transparent 1px,
      transparent
    );
    background-size: 25% 25%;
    transform: translateX(-50%);
    border-right: 1px solid rgba(${COLORS.gray[600]}, 0.06);

    ${tw`
      block
      absolute
      left-1/2
      top-0 pointer-events-none w-full h-full -z-10
    `};

    @media screen and (min-width: ${SCREENS.xl}) {
      max-width: ${SCREENS.xl};
    }
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <PageContainer>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}>
              <HomePage />
            </Route>
            <Route exact path="/materace" component={ProductCategory}>
              <ProductCategory color={"#fecd4d"} title={"Materace"} />
            </Route>
            <Route exact path="/produkt/materac-ewa" component={ProductPage} />
          </Switch>
          <Footer />
          <AppContainerBg src={BackgroundBottom} alt="MaxMeble" />
        </PageContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
