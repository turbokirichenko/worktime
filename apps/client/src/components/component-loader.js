import { ComponentLoader } from 'adminjs'

const componentLoader = new ComponentLoader()

const Components = {
    Dashboard: componentLoader.add('Dashboard', './dashboard.jsx'),
}

export { componentLoader, Components }