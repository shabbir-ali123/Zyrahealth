import { useState } from "react";
import ResorcesHero from "../components/resources/ResourcesHero"
import Tabs from "../components/resources/Tabs";
function ResourcesPage() {
    return (
        <>
            <ResorcesHero />
            <Tabs/>
        </>
    );
}

export default ResourcesPage;
