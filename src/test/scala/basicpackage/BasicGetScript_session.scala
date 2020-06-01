package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._


class BasicGetScript_session extends Simulation {

  val httpConf = http.baseUrl("https://api.openbrewerydb.org")
  val scn = scenario("basicgetscenario")
    .exec(http("basicgetrequest")
      .get("/breweries")
    .check(bodyString.saveAs("myResponse"))).exec{
    session=>
      val response=session("myResponse").as[String]
      println(response)
      session
  }

  setUp(
    scn.inject(atOnceUsers(1)).protocols(httpConf)
  )

}
