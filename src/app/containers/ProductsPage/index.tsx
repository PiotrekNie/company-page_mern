// import React from "react";
// import styled, { css } from "styled-components";
// import tw from "twin.macro";

import { Breadcrumbs } from "../../components/breadcrumbs";

export function ProductPage() {
  return (
    <div className="container">
      <h1>Materac Ewa</h1>
      <Breadcrumbs
        link={[
          { url: "/materace", title: "materace" },
          { url: "/produkt/materac-ewa", title: "materac ewa" },
        ]}
      />
    </div>
  );
}
