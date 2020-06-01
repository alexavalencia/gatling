package injectionprofile

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class BasicGetScript_OpenModel extends Simulation {

  val httpConf = http.baseUrl("http://newtours.demoaut.com")
  val scn = scenario("basicgetscenario").forever() {
    pace(2)
    .exec(http("basicgetrequest")
      .get("/mercurycruise.php"))
  }
  setUp(
    scn.inject(
      constantUsersPerSec(0.00833) during(600)
    ).protocols(httpConf)
  ).maxDuration(610)

}
