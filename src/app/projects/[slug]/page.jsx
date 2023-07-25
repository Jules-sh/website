'use client';

import generalstyles from "@/app/cssComponents/readingPage.module.css"

import { useParams } from 'next/navigation'
import LinkDivRow from "@/app/components/linkDiv/linkDivRow/linkDivRow";
import idToProject from "@/app/data/mapping"


export default function Page() {
    let project = idToProject(useParams().slug)
    return (
        <div className={generalstyles.main}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <LinkDivRow
                names={Array.from(project.connection.getActive().keys())}
                destinations={Array.from(project.connection.getActive().values())}
                color='black'
            ></LinkDivRow>
        </div>
    )
}