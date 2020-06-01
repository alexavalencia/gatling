package injectionprofile

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class BasicGetScript_CloseMetaDSL extends Simulation {

  val httpConf = http.baseUrl("http://newtours.demoaut.com")
  val scn = scenario("basicgetscenario").forever() {
    pace(2)
    .exec(http("basicgetrequest")
      .get("/mercurycruise.php"))
  }
  setUp(
    scn.inject(
      constantConcurrentUsers(10) during(10),
      rampConcurrentUsers(10) to (20) during(10)
    ).protocols(httpConf)
  ).maxDuration(60)

}
