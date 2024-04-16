import React from "react";
import { InfoWrapper } from "./InfoWrapper /InfoWrapper";
import { ProjectWrapper } from "./ProjectWrapper/ProjectWrapper";
import { VisualWrapper } from "./VisualWrapepr/VisualWrapper";
import { PersonalWrapper } from "./PersonalWrapper/PersonalWrapper";
import { ContactWrapper } from "./ContactWrapper/Contact";

export const Main = () => {
    return (
        <main>
            <InfoWrapper />
            <ProjectWrapper />
            <VisualWrapper/>
            <PersonalWrapper/>
            <ContactWrapper/>
        </main>
    );
}