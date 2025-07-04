function BuRoof () {
    TempC = Center
    TempW = HWidth
    TempL = HLong
    Center = positions.add(
    Center,
    pos(0, HHight * 2 + 1, 0)
    )
    while (!(HLong == 0 || HWidth == 0)) {
        F2D(Face2)
        blocks.fill(
        屋頂,
        PRF,
        PLB,
        FillOperation.Replace
        )
        loops.pause(Delay)
        HLong += -1
        HWidth += -1
        Center = positions.add(
        Center,
        pos(0, 1, 0)
        )
    }
    Center = TempC
    HWidth = TempW
    HLong = TempL
}
function BuWall2 () {
    TempC = Center
    for (let index = 0; index < HHight; index++) {
        F2D(Face2)
        blocks.fill(
        牆壁,
        PRF,
        PFC,
        FillOperation.Replace
        )
        blocks.fill(
        牆壁,
        PFC,
        Center,
        FillOperation.Replace
        )
        blocks.fill(
        牆壁,
        Center,
        PLC,
        FillOperation.Replace
        )
        blocks.fill(
        牆壁,
        PLC,
        PLB,
        FillOperation.Replace
        )
        blocks.fill(
        牆壁,
        PLB,
        PRB,
        FillOperation.Replace
        )
        blocks.fill(
        牆壁,
        PRB,
        PRF,
        FillOperation.Replace
        )
        loops.pause(Delay)
        Center = positions.add(
        Center,
        pos(0, 1, 0)
        )
    }
    Center = TempC
}
function BuWall3 () {
    TempC = Center
    Center = positions.add(
    Center,
    pos(0, HHight, 0)
    )
    for (let index = 0; index < HHight; index++) {
        Center = positions.add(
        Center,
        pos(0, 1, 0)
        )
        F2D(Face2)
        blocks.fill(
        牆壁,
        PRC,
        PLC,
        FillOperation.Replace
        )
        loops.pause(Delay)
        blocks.fill(
        牆壁,
        PLC,
        PLB,
        FillOperation.Replace
        )
        loops.pause(Delay)
        blocks.fill(
        牆壁,
        PLB,
        PRB,
        FillOperation.Replace
        )
        loops.pause(Delay)
        blocks.fill(
        牆壁,
        PRB,
        PRC,
        FillOperation.Replace
        )
        loops.pause(Delay)
    }
    Center = TempC
}
function Bufloor () {
    TempC = Center
    Center = positions.add(
    Center,
    pos(0, -1, 0)
    )
    F2D(Face2)
    blocks.fill(
    地板,
    PRF,
    PLB,
    FillOperation.Replace
    )
    loops.pause(Delay)
    Center = positions.add(
    Center,
    pos(0, HHight * -1, 0)
    )
    F2D(Face2)
    blocks.fill(
    地板,
    PRF,
    PLB,
    FillOperation.Replace
    )
    loops.pause(Delay)
    Center = TempC
    Center = positions.add(
    Center,
    pos(0, HHight * 1, 0)
    )
    F2D(Face2)
    blocks.fill(
    地板,
    PRF,
    PLB,
    FillOperation.Replace
    )
    loops.pause(Delay)
    Center = TempC
}
function BuWall () {
    TempC = Center
    for (let index = 0; index < HHight; index++) {
        Center = positions.add(
        Center,
        pos(0, -1, 0)
        )
        F2D(Face2)
        blocks.fill(
        牆壁,
        PRF,
        PLF,
        FillOperation.Replace
        )
        blocks.fill(
        牆壁,
        PLF,
        PLB,
        FillOperation.Replace
        )
        blocks.fill(
        牆壁,
        PLB,
        PRB,
        FillOperation.Replace
        )
        blocks.fill(
        牆壁,
        PRB,
        PRF,
        FillOperation.Replace
        )
        loops.pause(Delay)
    }
    Center = TempC
}
function F2D (Dir: number) {
    if (Dir == 2) {
        player.runChatCommand("Face2South")
        Face2South()
    } else if (Dir == 1) {
        player.runChatCommand("Face2East")
        Face2East()
    } else if (Dir == 0) {
        player.runChatCommand("Face2North")
        Face2North()
    } else {
        player.runChatCommand("Face2West")
        Face2West()
    }
    loops.pause(Delay)
}
function Face2West () {
    PRF = positions.add(
    Center,
    pos(HLong * -1, 0, HWidth * 1)
    )
    PLF = positions.add(
    Center,
    pos(HLong * -1, 0, HWidth * -1)
    )
    PRB = positions.add(
    Center,
    pos(HLong * 1, 0, HWidth * 1)
    )
    PLB = positions.add(
    Center,
    pos(HLong * 1, 0, HWidth * -1)
    )
    PFC = positions.add(
    Center,
    pos(HLong * -1, 0, 0)
    )
    PBC = positions.add(
    Center,
    pos(HLong * 1, 0, 0)
    )
    PLC = positions.add(
    Center,
    pos(0, 0, HWidth * -1)
    )
    PRC = positions.add(
    Center,
    pos(0, 0, HWidth * 1)
    )
}
player.onChat("Bu", function () {
    Center = player.position()
    Face2 = positions.toCompassDirection(player.getOrientation())
    player.teleport(posLocal(0, HHight * 3, HLong * -3))
    loops.pause(Delay)
    player.say("Star 2 building ")
    BuClr()
    loops.pause(Delay)
    Bufloor()
    player.say("Floor done!")
    loops.pause(Delay)
    BuGate()
    loops.pause(Delay)
    player.runChatCommand("BuWall")
    BuWall()
    player.say("Base done!")
    loops.pause(Delay)
    BuWall2()
    loops.pause(Delay)
    BuWall3()
    player.say("Wall done")
    loops.pause(Delay)
    BuRoof()
    player.say("Roof Done!")
})
function Face2East () {
    PRF = positions.add(
    Center,
    pos(HLong * 1, 0, HWidth * -1)
    )
    PLF = positions.add(
    Center,
    pos(HLong * 1, 0, HWidth * 1)
    )
    PRB = positions.add(
    Center,
    pos(HLong * -1, 0, HWidth * -1)
    )
    PLB = positions.add(
    Center,
    pos(HLong * -1, 0, HWidth * 1)
    )
    PFC = positions.add(
    Center,
    pos(HLong * 1, 0, 0)
    )
    PBC = positions.add(
    Center,
    pos(HLong * -1, 0, 0)
    )
    PLC = positions.add(
    Center,
    pos(0, 0, HWidth * 1)
    )
    PRC = positions.add(
    Center,
    pos(0, 0, HWidth * -1)
    )
}
function Face2North () {
    PRF = positions.add(
    Center,
    pos(HWidth * -1, 0, HLong * -1)
    )
    PLF = positions.add(
    Center,
    pos(HWidth * 1, 0, HLong * -1)
    )
    PRB = positions.add(
    Center,
    pos(HWidth * -1, 0, HLong * 1)
    )
    PLB = positions.add(
    Center,
    pos(HWidth * 1, 0, HLong * 1)
    )
    PFC = positions.add(
    Center,
    pos(0, 0, HLong * -1)
    )
    PBC = positions.add(
    Center,
    pos(0, 0, HLong * 1)
    )
    PLC = positions.add(
    Center,
    pos(HWidth * 1, 0, 0)
    )
    PRC = positions.add(
    Center,
    pos(HWidth * -1, 0, 0)
    )
}
function Face2South () {
    PRF = positions.add(
    Center,
    pos(HWidth * 1, 0, HLong * 1)
    )
    PLF = positions.add(
    Center,
    pos(HWidth * -1, 0, HLong * 1)
    )
    PRB = positions.add(
    Center,
    pos(HWidth * 1, 0, HLong * -1)
    )
    PLB = positions.add(
    Center,
    pos(HWidth * -1, 0, HLong * -1)
    )
    PFC = positions.add(
    Center,
    pos(0, 0, HLong * 1)
    )
    PBC = positions.add(
    Center,
    pos(0, 0, HLong * -1)
    )
    PLC = positions.add(
    Center,
    pos(HWidth * -1, 0, 0)
    )
    PRC = positions.add(
    Center,
    pos(HWidth * 1, 0, 0)
    )
}
function BuGate () {
    TempC = Center
    Center = positions.add(
    Center,
    pos(0, HHight * 1 + 1, 0)
    )
    F2D(Face2)
    loops.pause(Delay)
    blocks.fill(
    欄杆,
    PRF,
    PLF,
    FillOperation.Replace
    )
    loops.pause(Delay)
    blocks.fill(
    欄杆,
    PRF,
    PRC,
    FillOperation.Replace
    )
    loops.pause(Delay)
    blocks.fill(
    欄杆,
    PLC,
    PLF,
    FillOperation.Replace
    )
    loops.pause(Delay)
    Center = TempC
}
function BuClr () {
    TempC = Center
    Center = positions.add(
    Center,
    pos(0, HHight * -1, 0)
    )
    F2D(Face2)
    builder.teleportTo(PRF)
    builder.mark()
    Center = positions.add(
    Center,
    pos(0, HHight * 4, 0)
    )
    F2D(Face2)
    loops.pause(Delay)
    builder.teleportTo(PLB)
    builder.fill(AIR)
    Center = TempC
}
let PBC: Position = null
let PLF: Position = null
let PRC: Position = null
let PRB: Position = null
let PLC: Position = null
let PFC: Position = null
let PLB: Position = null
let PRF: Position = null
let Face2: CompassDirection = null
let TempL = 0
let TempW = 0
let Center: Position = null
let TempC: Position = null
let Delay = 0
let HHight = 0
let HWidth = 0
let HLong = 0
let 欄杆 = 0
let 屋頂 = 0
let 地板 = 0
let 牆壁 = 0
gameplay.timeSet(gameplay.time(MIDDAY))
牆壁 = CHISELED_SANDSTONE
地板 = SMOOTH_SANDSTONE
屋頂 = PLANKS_OAK
欄杆 = ACACIA_FENCE
HLong = 6
HWidth = 8
HHight = 4
Delay = 10
