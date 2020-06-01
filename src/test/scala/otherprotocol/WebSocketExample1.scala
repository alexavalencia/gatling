package otherprotocol

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class WebSocketExample1 extends Simulation {
  //https://www.websocket.org/echo.html
  //wss://echo.websocket.org/?encoding=text

  val httpProtocol = http.baseUrl("https://www.websocket.org")
    .wsBaseUrl("wss://echo.websocket.org")

  val scn = scenario("testwebsockets")
    .exec(http("fisthttprequest")
      .get("/")).pause(3).exec(ws("opensocket").connect("/?encoding=text")
    .onConnected(exec(ws("sendmessage")
      .sendText("hello"))
      .exec(ws("secondmessage")
        .sendText("i am from colombia")
        .await(20)(ws.checkTextMessage("check1").check(regex(".*from.*"))))))
    .exec(ws("closeconnection").close)

  setUp(scn.inject(atOnceUsers(1)).protocols(httpProtocol))

}
