import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { sessionService } from 'redux-react-session'

import * as Sentry from '@sentry/browser'

// load style
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./assets/scss/main.scss"

// store
import configureStore from "./configureStore"

// 404 page
import PageNotFound from './components/PageNotFound'

// loader
import Loader from "./components/Loader"

import { SENTRY_DSN } from './constants'
import routes from "./routes"

// load translation
import './i18n'

const AnonymousLayout = React.lazy( () => import("./modules/layouts/containers/AnonymousLayout"))
const AdminLayout = React.lazy( () =>  import("./modules/layouts/containers/AdminLayout"))

const store = configureStore()

Sentry.init({
  release: 'tree-decision-front@1.0.0',
  dsn: SENTRY_DSN,
});

// Init the session service
sessionService.initSessionService(store, {refreshOnCheckAuth: true})
  .finally(() =>
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <React.Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/loader" component={Loader} />
              <Route path={ routes.anonymous.path } component={AnonymousLayout} />
              <Route onEnter={sessionService.checkAuth} path={ routes.admin.path } component={AdminLayout} />
              <Route component={ PageNotFound }/>
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </Provider>,
      document.getElementById("root")
    )
  )

