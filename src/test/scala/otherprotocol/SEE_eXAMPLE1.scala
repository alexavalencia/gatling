package otherprotocol

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class SEE_eXAMPLE1  extends Simulation{
  val httpConf=http.baseUrl("http://demo.howopensource.com")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
    .inferHtmlResources()
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.9,es;q=0.8")
    .acceptEncodingHeader("grip,deflate")
    .userAgentHeader("Gatling2")
    .upgradeInsecureRequestsHeader("1")

  val  scn=scenario("ssescenario")
    .exec(sse("sse_req").connect("/sse/stocks.php")
      .await(50)(sse.checkMessage("check_connet").check(regex(".*.*").saveAs("myResponse"))))
    .exec(session=>
      {
        println(session("myResponse").as[String])
        session
      }
    )
    .pause(5)
    .exec(sse("close connection").close())

  setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))
}
