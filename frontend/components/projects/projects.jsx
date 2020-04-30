import React from "react"
import { Link } from "react-router-dom"


function Projects() {
    return (
        <nav className="project-Links">
            <Link to="/">project-1</Link>

            <Link to="/">project-2</Link>

            <Link to="/">project-3</Link>
        </nav>

    )
}

export default Projects;