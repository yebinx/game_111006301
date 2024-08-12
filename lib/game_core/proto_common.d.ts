declare namespace protoReport {
/** cmd enum. */
export enum cmd {
    msg_jackpot = 80,
    msg_world_mission = 81,
    msg_jackpot_report = 90,
    msg_slot_report = 91,
    msg_hunter_report = 92,
    msg_world_mission_report = 93,
    msg_qyxz_report = 94,
    msg_qzdz_report = 95,
    msg_arcade_report = 96,
    msg_single_report = 97,
    msg_lottery_report = 98
}

/** Represents an undefined. */
export class undefined implements Iundefined {

    /**
     * Constructs a new undefined.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iundefined);

    /**
     * Creates a new undefined instance using the specified properties.
     * @param [properties] Properties to set
     * @returns undefined instance
     */
    public static create(properties?: Iundefined): void;

    /**
     * Encodes the specified undefined message. Does not implicitly {@link undefined.verify|verify} messages.
     * @param message undefined message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iundefined, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified undefined message, length delimited. Does not implicitly {@link undefined.verify|verify} messages.
     * @param message undefined message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iundefined, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an undefined message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns undefined
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): void;

    /**
     * Decodes an undefined message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns undefined
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): void;

    /**
     * Verifies an undefined message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an undefined message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns undefined
     */
    public static fromObject(object: { [k: string]: any }): void;

    /**
     * Creates a plain object from an undefined message. Also converts values to other types if specified.
     * @param message undefined
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: undefined, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this undefined to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** arcade_report_cmd enum. */
export enum arcade_report_cmd {
    arcadeCommonDetail = 0,
    arcadePlayerDetail = 1,
    arcadeLittleGameDetail = 2
}

/** Represents a msg_arcade_report_service */
export class msg_arcade_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_arcade_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_arcade_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_arcade_report_service;
}

/** Represents an arcadeCommonDetail. */
export class arcadeCommonDetail implements IarcadeCommonDetail {

    /**
     * Constructs a new arcadeCommonDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IarcadeCommonDetail);

    /** arcadeCommonDetail playType. */
    public playType: number;

    /** arcadeCommonDetail roomType. */
    public roomType: number;

    /** arcadeCommonDetail baseScores. */
    public baseScores: (number|Long);

    /** arcadeCommonDetail minEnterScores. */
    public minEnterScores: (number|Long);

    /** arcadeCommonDetail layoutHash. */
    public layoutHash?: (Ilayout_hash_type|null);

    /** arcadeCommonDetail hash. */
    public hash?: (Iarcade_hash_type|null);

    /** arcadeCommonDetail card. */
    public card: Icommon_card_type[];

    /**
     * Creates a new arcadeCommonDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns arcadeCommonDetail instance
     */
    public static create(properties?: IarcadeCommonDetail): arcadeCommonDetail;

    /**
     * Encodes the specified arcadeCommonDetail message. Does not implicitly {@link arcadeCommonDetail.verify|verify} messages.
     * @param message arcadeCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IarcadeCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified arcadeCommonDetail message, length delimited. Does not implicitly {@link arcadeCommonDetail.verify|verify} messages.
     * @param message arcadeCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IarcadeCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an arcadeCommonDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns arcadeCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arcadeCommonDetail;

    /**
     * Decodes an arcadeCommonDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns arcadeCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arcadeCommonDetail;

    /**
     * Verifies an arcadeCommonDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an arcadeCommonDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns arcadeCommonDetail
     */
    public static fromObject(object: { [k: string]: any }): arcadeCommonDetail;

    /**
     * Creates a plain object from an arcadeCommonDetail message. Also converts values to other types if specified.
     * @param message arcadeCommonDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: arcadeCommonDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this arcadeCommonDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an arcadePlayerDetail. */
export class arcadePlayerDetail implements IarcadePlayerDetail {

    /**
     * Constructs a new arcadePlayerDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IarcadePlayerDetail);

    /** arcadePlayerDetail truco. */
    public truco?: (Itruco_detail|null);

    /** arcadePlayerDetail domino. */
    public domino?: (Idomino_detail|null);

    /** arcadePlayerDetail bingo. */
    public bingo?: (Ibingo_detail|null);

    /** arcadePlayerDetail mines. */
    public mines?: (Imines_detail|null);

    /** arcadePlayerDetail guess. */
    public guess?: (Iguess_detail|null);

    /** arcadePlayerDetail plinko. */
    public plinko?: (Iplinko_detail|null);

    /** arcadePlayerDetail blackjack. */
    public blackjack?: (Iblackjack_detail|null);

    /** arcadePlayerDetail pachinko. */
    public pachinko?: (Ipachinko_detail|null);

    /** arcadePlayerDetail scratchcards. */
    public scratchcards?: (Iscratchcards_detail|null);

    /** arcadePlayerDetail pick. */
    public pick?: (Ipick_detail|null);

    /** arcadePlayerDetail area. */
    public area?: (Iarea_detail|null);

    /** arcadePlayerDetail texas. */
    public texas?: (Itexas_detail|null);

    /** arcadePlayerDetail crash. */
    public crash?: (Icrash_detail|null);

    /** arcadePlayerDetail wheel. */
    public wheel?: (Iwheel_detail|null);

    /** arcadePlayerDetail lucky. */
    public lucky?: (Ilucky_detail|null);

    /** arcadePlayerDetail flush. */
    public flush?: (Iflush_detail|null);

    /** arcadePlayerDetail adventure. */
    public adventure?: (Iadventure_detail|null);

    /** arcadePlayerDetail wheel2. */
    public wheel2?: (Iwheel2_detail|null);

    /** arcadePlayerDetail card5. */
    public card5?: (Icard5_detail|null);

    /** arcadePlayerDetail thaiPokDeng. */
    public thaiPokDeng?: (Ithai_pok_deng_detail|null);

    /** arcadePlayerDetail scratchcards2. */
    public scratchcards2?: (Iscratchcards2_detail|null);

    /** arcadePlayerDetail route. */
    public route?: (Iroute_detail|null);

    /** arcadePlayerDetail redPacket. */
    public redPacket?: (Ired_packet_detail|null);

    /** arcadePlayerDetail paiKang. */
    public paiKang?: (Ipai_kang_detail|null);

    /** arcadePlayerDetail seotda. */
    public seotda?: (Iseotda_detail|null);

    /** arcadePlayerDetail soha. */
    public soha?: (Isoha_detail|null);

    /** arcadePlayerDetail mahjong. */
    public mahjong?: (Imahjong_detail|null);

    /** arcadePlayerDetail landlord. */
    public landlord?: (Ilandlord_detail|null);

    /** arcadePlayerDetail ludoQuick. */
    public ludoQuick?: (Iludo_quick_detail|null);

    /** arcadePlayerDetail pokDeng. */
    public pokDeng?: (Ipok_deng_detail|null);

    /**
     * Creates a new arcadePlayerDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns arcadePlayerDetail instance
     */
    public static create(properties?: IarcadePlayerDetail): arcadePlayerDetail;

    /**
     * Encodes the specified arcadePlayerDetail message. Does not implicitly {@link arcadePlayerDetail.verify|verify} messages.
     * @param message arcadePlayerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IarcadePlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified arcadePlayerDetail message, length delimited. Does not implicitly {@link arcadePlayerDetail.verify|verify} messages.
     * @param message arcadePlayerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IarcadePlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an arcadePlayerDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns arcadePlayerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arcadePlayerDetail;

    /**
     * Decodes an arcadePlayerDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns arcadePlayerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arcadePlayerDetail;

    /**
     * Verifies an arcadePlayerDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an arcadePlayerDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns arcadePlayerDetail
     */
    public static fromObject(object: { [k: string]: any }): arcadePlayerDetail;

    /**
     * Creates a plain object from an arcadePlayerDetail message. Also converts values to other types if specified.
     * @param message arcadePlayerDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: arcadePlayerDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this arcadePlayerDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an arcadeLittleGameDetail. */
export class arcadeLittleGameDetail implements IarcadeLittleGameDetail {

    /**
     * Constructs a new arcadeLittleGameDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IarcadeLittleGameDetail);

    /** arcadeLittleGameDetail detail. */
    public detail: Ilg_detail_type;

    /**
     * Creates a new arcadeLittleGameDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns arcadeLittleGameDetail instance
     */
    public static create(properties?: IarcadeLittleGameDetail): arcadeLittleGameDetail;

    /**
     * Encodes the specified arcadeLittleGameDetail message. Does not implicitly {@link arcadeLittleGameDetail.verify|verify} messages.
     * @param message arcadeLittleGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IarcadeLittleGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified arcadeLittleGameDetail message, length delimited. Does not implicitly {@link arcadeLittleGameDetail.verify|verify} messages.
     * @param message arcadeLittleGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IarcadeLittleGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an arcadeLittleGameDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns arcadeLittleGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arcadeLittleGameDetail;

    /**
     * Decodes an arcadeLittleGameDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns arcadeLittleGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arcadeLittleGameDetail;

    /**
     * Verifies an arcadeLittleGameDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an arcadeLittleGameDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns arcadeLittleGameDetail
     */
    public static fromObject(object: { [k: string]: any }): arcadeLittleGameDetail;

    /**
     * Creates a plain object from an arcadeLittleGameDetail message. Also converts values to other types if specified.
     * @param message arcadeLittleGameDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: arcadeLittleGameDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this arcadeLittleGameDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a truco_detail. */
export class truco_detail implements Itruco_detail {

    /**
     * Constructs a new truco_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itruco_detail);

    /** truco_detail total. */
    public total: Itruco_total_detail[];

    /** truco_detail detail. */
    public detail: Itruco_role_detail[];

    /**
     * Creates a new truco_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns truco_detail instance
     */
    public static create(properties?: Itruco_detail): truco_detail;

    /**
     * Encodes the specified truco_detail message. Does not implicitly {@link truco_detail.verify|verify} messages.
     * @param message truco_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itruco_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified truco_detail message, length delimited. Does not implicitly {@link truco_detail.verify|verify} messages.
     * @param message truco_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itruco_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a truco_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns truco_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): truco_detail;

    /**
     * Decodes a truco_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns truco_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): truco_detail;

    /**
     * Verifies a truco_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a truco_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns truco_detail
     */
    public static fromObject(object: { [k: string]: any }): truco_detail;

    /**
     * Creates a plain object from a truco_detail message. Also converts values to other types if specified.
     * @param message truco_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: truco_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this truco_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a truco_total_detail. */
export class truco_total_detail implements Itruco_total_detail {

    /**
     * Constructs a new truco_total_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itruco_total_detail);

    /** truco_total_detail pos. */
    public pos: number;

    /** truco_total_detail userName. */
    public userName: string;

    /** truco_total_detail isSelf. */
    public isSelf: boolean;

    /** truco_total_detail faction. */
    public faction: number;

    /** truco_total_detail setCount. */
    public setCount: number;

    /** truco_total_detail factionScores. */
    public factionScores: number;

    /** truco_total_detail isWin. */
    public isWin: boolean;

    /** truco_total_detail profit. */
    public profit: (number|Long);

    /**
     * Creates a new truco_total_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns truco_total_detail instance
     */
    public static create(properties?: Itruco_total_detail): truco_total_detail;

    /**
     * Encodes the specified truco_total_detail message. Does not implicitly {@link truco_total_detail.verify|verify} messages.
     * @param message truco_total_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itruco_total_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified truco_total_detail message, length delimited. Does not implicitly {@link truco_total_detail.verify|verify} messages.
     * @param message truco_total_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itruco_total_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a truco_total_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns truco_total_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): truco_total_detail;

    /**
     * Decodes a truco_total_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns truco_total_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): truco_total_detail;

    /**
     * Verifies a truco_total_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a truco_total_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns truco_total_detail
     */
    public static fromObject(object: { [k: string]: any }): truco_total_detail;

    /**
     * Creates a plain object from a truco_total_detail message. Also converts values to other types if specified.
     * @param message truco_total_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: truco_total_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this truco_total_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a truco_role_detail. */
export class truco_role_detail implements Itruco_role_detail {

    /**
     * Constructs a new truco_role_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itruco_role_detail);

    /** truco_role_detail pos. */
    public pos: number;

    /** truco_role_detail userName. */
    public userName: string;

    /** truco_role_detail isSelf. */
    public isSelf: boolean;

    /** truco_role_detail faction. */
    public faction: number;

    /** truco_role_detail setCount. */
    public setCount: number;

    /** truco_role_detail roundCount. */
    public roundCount: number;

    /** truco_role_detail setScores. */
    public setScores: number;

    /** truco_role_detail card. */
    public card: Icard_info;

    /** truco_role_detail isMax. */
    public isMax: boolean;

    /** truco_role_detail winLose. */
    public winLose: number;

    /**
     * Creates a new truco_role_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns truco_role_detail instance
     */
    public static create(properties?: Itruco_role_detail): truco_role_detail;

    /**
     * Encodes the specified truco_role_detail message. Does not implicitly {@link truco_role_detail.verify|verify} messages.
     * @param message truco_role_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itruco_role_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified truco_role_detail message, length delimited. Does not implicitly {@link truco_role_detail.verify|verify} messages.
     * @param message truco_role_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itruco_role_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a truco_role_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns truco_role_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): truco_role_detail;

    /**
     * Decodes a truco_role_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns truco_role_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): truco_role_detail;

    /**
     * Verifies a truco_role_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a truco_role_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns truco_role_detail
     */
    public static fromObject(object: { [k: string]: any }): truco_role_detail;

    /**
     * Creates a plain object from a truco_role_detail message. Also converts values to other types if specified.
     * @param message truco_role_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: truco_role_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this truco_role_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a domino_detail. */
export class domino_detail implements Idomino_detail {

    /**
     * Constructs a new domino_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Idomino_detail);

    /** domino_detail total. */
    public total: Idomino_total_detail[];

    /** domino_detail detail. */
    public detail: Idomino_role_detail[];

    /**
     * Creates a new domino_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns domino_detail instance
     */
    public static create(properties?: Idomino_detail): domino_detail;

    /**
     * Encodes the specified domino_detail message. Does not implicitly {@link domino_detail.verify|verify} messages.
     * @param message domino_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Idomino_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified domino_detail message, length delimited. Does not implicitly {@link domino_detail.verify|verify} messages.
     * @param message domino_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Idomino_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a domino_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns domino_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_detail;

    /**
     * Decodes a domino_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns domino_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_detail;

    /**
     * Verifies a domino_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a domino_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns domino_detail
     */
    public static fromObject(object: { [k: string]: any }): domino_detail;

    /**
     * Creates a plain object from a domino_detail message. Also converts values to other types if specified.
     * @param message domino_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: domino_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this domino_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a domino_total_detail. */
export class domino_total_detail implements Idomino_total_detail {

    /**
     * Constructs a new domino_total_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Idomino_total_detail);

    /** domino_total_detail pos. */
    public pos: number;

    /** domino_total_detail userName. */
    public userName: string;

    /** domino_total_detail isSelf. */
    public isSelf: boolean;

    /** domino_total_detail isWin. */
    public isWin: boolean;

    /** domino_total_detail points. */
    public points: number;

    /** domino_total_detail cards. */
    public cards: Icard_info[];

    /** domino_total_detail calType. */
    public calType: number;

    /** domino_total_detail calMulti. */
    public calMulti: number;

    /** domino_total_detail baseScores. */
    public baseScores: (number|Long);

    /** domino_total_detail profit. */
    public profit: (number|Long);

    /** domino_total_detail passProfit. */
    public passProfit: (number|Long);

    /** domino_total_detail totalProfit. */
    public totalProfit: (number|Long);

    /**
     * Creates a new domino_total_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns domino_total_detail instance
     */
    public static create(properties?: Idomino_total_detail): domino_total_detail;

    /**
     * Encodes the specified domino_total_detail message. Does not implicitly {@link domino_total_detail.verify|verify} messages.
     * @param message domino_total_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Idomino_total_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified domino_total_detail message, length delimited. Does not implicitly {@link domino_total_detail.verify|verify} messages.
     * @param message domino_total_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Idomino_total_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a domino_total_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns domino_total_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_total_detail;

    /**
     * Decodes a domino_total_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns domino_total_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_total_detail;

    /**
     * Verifies a domino_total_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a domino_total_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns domino_total_detail
     */
    public static fromObject(object: { [k: string]: any }): domino_total_detail;

    /**
     * Creates a plain object from a domino_total_detail message. Also converts values to other types if specified.
     * @param message domino_total_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: domino_total_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this domino_total_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a domino_role_detail. */
export class domino_role_detail implements Idomino_role_detail {

    /**
     * Constructs a new domino_role_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Idomino_role_detail);

    /** domino_role_detail pos. */
    public pos: number;

    /** domino_role_detail userName. */
    public userName: string;

    /** domino_role_detail isSelf. */
    public isSelf: boolean;

    /** domino_role_detail roundCount. */
    public roundCount: number;

    /** domino_role_detail playCard. */
    public playCard?: (Icard_info|null);

    /** domino_role_detail restCardsNum. */
    public restCardsNum: number;

    /** domino_role_detail isPass. */
    public isPass: boolean;

    /** domino_role_detail passProfit. */
    public passProfit: (number|Long);

    /**
     * Creates a new domino_role_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns domino_role_detail instance
     */
    public static create(properties?: Idomino_role_detail): domino_role_detail;

    /**
     * Encodes the specified domino_role_detail message. Does not implicitly {@link domino_role_detail.verify|verify} messages.
     * @param message domino_role_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Idomino_role_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified domino_role_detail message, length delimited. Does not implicitly {@link domino_role_detail.verify|verify} messages.
     * @param message domino_role_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Idomino_role_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a domino_role_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns domino_role_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): domino_role_detail;

    /**
     * Decodes a domino_role_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns domino_role_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): domino_role_detail;

    /**
     * Verifies a domino_role_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a domino_role_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns domino_role_detail
     */
    public static fromObject(object: { [k: string]: any }): domino_role_detail;

    /**
     * Creates a plain object from a domino_role_detail message. Also converts values to other types if specified.
     * @param message domino_role_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: domino_role_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this domino_role_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bingo_detail. */
export class bingo_detail implements Ibingo_detail {

    /**
     * Constructs a new bingo_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibingo_detail);

    /** bingo_detail ballList. */
    public ballList: number[];

    /** bingo_detail isPayment. */
    public isPayment: boolean;

    /** bingo_detail paymentScores. */
    public paymentScores: (number|Long);

    /** bingo_detail profit. */
    public profit: (number|Long);

    /** bingo_detail cardsNum. */
    public cardsNum: number;

    /** bingo_detail cardsInfo. */
    public cardsInfo: Icard_info_type[];

    /**
     * Creates a new bingo_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bingo_detail instance
     */
    public static create(properties?: Ibingo_detail): bingo_detail;

    /**
     * Encodes the specified bingo_detail message. Does not implicitly {@link bingo_detail.verify|verify} messages.
     * @param message bingo_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibingo_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bingo_detail message, length delimited. Does not implicitly {@link bingo_detail.verify|verify} messages.
     * @param message bingo_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibingo_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bingo_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bingo_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingo_detail;

    /**
     * Decodes a bingo_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bingo_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingo_detail;

    /**
     * Verifies a bingo_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bingo_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bingo_detail
     */
    public static fromObject(object: { [k: string]: any }): bingo_detail;

    /**
     * Creates a plain object from a bingo_detail message. Also converts values to other types if specified.
     * @param message bingo_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bingo_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bingo_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a card_info_type. */
export class card_info_type implements Icard_info_type {

    /**
     * Constructs a new card_info_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icard_info_type);

    /** card_info_type cardIndex. */
    public cardIndex: number;

    /** card_info_type gridList. */
    public gridList: Igrid_info_type[];

    /**
     * Creates a new card_info_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns card_info_type instance
     */
    public static create(properties?: Icard_info_type): card_info_type;

    /**
     * Encodes the specified card_info_type message. Does not implicitly {@link card_info_type.verify|verify} messages.
     * @param message card_info_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icard_info_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified card_info_type message, length delimited. Does not implicitly {@link card_info_type.verify|verify} messages.
     * @param message card_info_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icard_info_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a card_info_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns card_info_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card_info_type;

    /**
     * Decodes a card_info_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns card_info_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): card_info_type;

    /**
     * Verifies a card_info_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a card_info_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns card_info_type
     */
    public static fromObject(object: { [k: string]: any }): card_info_type;

    /**
     * Creates a plain object from a card_info_type message. Also converts values to other types if specified.
     * @param message card_info_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: card_info_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this card_info_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a grid_info_type. */
export class grid_info_type implements Igrid_info_type {

    /**
     * Constructs a new grid_info_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Igrid_info_type);

    /** grid_info_type gridIndex. */
    public gridIndex: number;

    /** grid_info_type gridNum. */
    public gridNum: number;

    /** grid_info_type isClicked. */
    public isClicked: boolean;

    /** grid_info_type isLucky. */
    public isLucky: boolean;

    /** grid_info_type luckyScores. */
    public luckyScores: (number|Long);

    /**
     * Creates a new grid_info_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns grid_info_type instance
     */
    public static create(properties?: Igrid_info_type): grid_info_type;

    /**
     * Encodes the specified grid_info_type message. Does not implicitly {@link grid_info_type.verify|verify} messages.
     * @param message grid_info_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Igrid_info_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified grid_info_type message, length delimited. Does not implicitly {@link grid_info_type.verify|verify} messages.
     * @param message grid_info_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Igrid_info_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a grid_info_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns grid_info_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): grid_info_type;

    /**
     * Decodes a grid_info_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns grid_info_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): grid_info_type;

    /**
     * Verifies a grid_info_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a grid_info_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns grid_info_type
     */
    public static fromObject(object: { [k: string]: any }): grid_info_type;

    /**
     * Creates a plain object from a grid_info_type message. Also converts values to other types if specified.
     * @param message grid_info_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: grid_info_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this grid_info_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a mines_detail. */
export class mines_detail implements Imines_detail {

    /**
     * Constructs a new mines_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imines_detail);

    /** mines_detail issue. */
    public issue: (number|Long);

    /** mines_detail risk. */
    public risk: number;

    /** mines_detail hits. */
    public hits: number;

    /** mines_detail odds. */
    public odds: number;

    /** mines_detail isWin. */
    public isWin: boolean;

    /** mines_detail reward. */
    public reward: (number|Long);

    /** mines_detail gridList. */
    public gridList: Imines_grid_type[];

    /**
     * Creates a new mines_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mines_detail instance
     */
    public static create(properties?: Imines_detail): mines_detail;

    /**
     * Encodes the specified mines_detail message. Does not implicitly {@link mines_detail.verify|verify} messages.
     * @param message mines_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imines_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mines_detail message, length delimited. Does not implicitly {@link mines_detail.verify|verify} messages.
     * @param message mines_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imines_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mines_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mines_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines_detail;

    /**
     * Decodes a mines_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mines_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines_detail;

    /**
     * Verifies a mines_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mines_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mines_detail
     */
    public static fromObject(object: { [k: string]: any }): mines_detail;

    /**
     * Creates a plain object from a mines_detail message. Also converts values to other types if specified.
     * @param message mines_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mines_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mines_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a mines_grid_type. */
export class mines_grid_type implements Imines_grid_type {

    /**
     * Constructs a new mines_grid_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imines_grid_type);

    /** mines_grid_type gridIndex. */
    public gridIndex: number;

    /** mines_grid_type isClicked. */
    public isClicked: boolean;

    /** mines_grid_type isMines. */
    public isMines: boolean;

    /**
     * Creates a new mines_grid_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mines_grid_type instance
     */
    public static create(properties?: Imines_grid_type): mines_grid_type;

    /**
     * Encodes the specified mines_grid_type message. Does not implicitly {@link mines_grid_type.verify|verify} messages.
     * @param message mines_grid_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imines_grid_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mines_grid_type message, length delimited. Does not implicitly {@link mines_grid_type.verify|verify} messages.
     * @param message mines_grid_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imines_grid_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mines_grid_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mines_grid_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mines_grid_type;

    /**
     * Decodes a mines_grid_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mines_grid_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mines_grid_type;

    /**
     * Verifies a mines_grid_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mines_grid_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mines_grid_type
     */
    public static fromObject(object: { [k: string]: any }): mines_grid_type;

    /**
     * Creates a plain object from a mines_grid_type message. Also converts values to other types if specified.
     * @param message mines_grid_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mines_grid_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mines_grid_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a guess_detail. */
export class guess_detail implements Iguess_detail {

    /**
     * Constructs a new guess_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iguess_detail);

    /** guess_detail issue. */
    public issue: (number|Long);

    /** guess_detail betScores. */
    public betScores: (number|Long);

    /** guess_detail odds. */
    public odds: number;

    /** guess_detail reward. */
    public reward: (number|Long);

    /** guess_detail spreadResultList. */
    public spreadResultList: number[];

    /** guess_detail hiloSpreadResultList. */
    public hiloSpreadResultList: Ihilo_spread_type[];

    /** guess_detail diceSpreadResult. */
    public diceSpreadResult?: (Idice_spread_type|null);

    /** guess_detail rpsSpreadResult. */
    public rpsSpreadResult?: (Irps_spread_type|null);

    /**
     * Creates a new guess_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns guess_detail instance
     */
    public static create(properties?: Iguess_detail): guess_detail;

    /**
     * Encodes the specified guess_detail message. Does not implicitly {@link guess_detail.verify|verify} messages.
     * @param message guess_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iguess_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified guess_detail message, length delimited. Does not implicitly {@link guess_detail.verify|verify} messages.
     * @param message guess_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iguess_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a guess_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns guess_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): guess_detail;

    /**
     * Decodes a guess_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns guess_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): guess_detail;

    /**
     * Verifies a guess_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a guess_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns guess_detail
     */
    public static fromObject(object: { [k: string]: any }): guess_detail;

    /**
     * Creates a plain object from a guess_detail message. Also converts values to other types if specified.
     * @param message guess_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: guess_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this guess_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a hilo_spread_type. */
export class hilo_spread_type implements Ihilo_spread_type {

    /**
     * Constructs a new hilo_spread_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ihilo_spread_type);

    /** hilo_spread_type card. */
    public card: Icard_info;

    /** hilo_spread_type operationInfo. */
    public operationInfo: number;

    /**
     * Creates a new hilo_spread_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns hilo_spread_type instance
     */
    public static create(properties?: Ihilo_spread_type): hilo_spread_type;

    /**
     * Encodes the specified hilo_spread_type message. Does not implicitly {@link hilo_spread_type.verify|verify} messages.
     * @param message hilo_spread_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ihilo_spread_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified hilo_spread_type message, length delimited. Does not implicitly {@link hilo_spread_type.verify|verify} messages.
     * @param message hilo_spread_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ihilo_spread_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a hilo_spread_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns hilo_spread_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hilo_spread_type;

    /**
     * Decodes a hilo_spread_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns hilo_spread_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hilo_spread_type;

    /**
     * Verifies a hilo_spread_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a hilo_spread_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns hilo_spread_type
     */
    public static fromObject(object: { [k: string]: any }): hilo_spread_type;

    /**
     * Creates a plain object from a hilo_spread_type message. Also converts values to other types if specified.
     * @param message hilo_spread_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: hilo_spread_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this hilo_spread_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a dice_spread_type. */
export class dice_spread_type implements Idice_spread_type {

    /**
     * Constructs a new dice_spread_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Idice_spread_type);

    /** dice_spread_type selectPos. */
    public selectPos: number;

    /** dice_spread_type selectNumber. */
    public selectNumber: number;

    /** dice_spread_type spreadResult. */
    public spreadResult: number;

    /**
     * Creates a new dice_spread_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns dice_spread_type instance
     */
    public static create(properties?: Idice_spread_type): dice_spread_type;

    /**
     * Encodes the specified dice_spread_type message. Does not implicitly {@link dice_spread_type.verify|verify} messages.
     * @param message dice_spread_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Idice_spread_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified dice_spread_type message, length delimited. Does not implicitly {@link dice_spread_type.verify|verify} messages.
     * @param message dice_spread_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Idice_spread_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a dice_spread_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns dice_spread_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dice_spread_type;

    /**
     * Decodes a dice_spread_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns dice_spread_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dice_spread_type;

    /**
     * Verifies a dice_spread_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a dice_spread_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns dice_spread_type
     */
    public static fromObject(object: { [k: string]: any }): dice_spread_type;

    /**
     * Creates a plain object from a dice_spread_type message. Also converts values to other types if specified.
     * @param message dice_spread_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: dice_spread_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this dice_spread_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a rps_spread_type. */
export class rps_spread_type implements Irps_spread_type {

    /**
     * Constructs a new rps_spread_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Irps_spread_type);

    /** rps_spread_type roleSelect. */
    public roleSelect: number;

    /** rps_spread_type spreadResult. */
    public spreadResult: number;

    /** rps_spread_type spreadStatus. */
    public spreadStatus: number;

    /**
     * Creates a new rps_spread_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns rps_spread_type instance
     */
    public static create(properties?: Irps_spread_type): rps_spread_type;

    /**
     * Encodes the specified rps_spread_type message. Does not implicitly {@link rps_spread_type.verify|verify} messages.
     * @param message rps_spread_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Irps_spread_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified rps_spread_type message, length delimited. Does not implicitly {@link rps_spread_type.verify|verify} messages.
     * @param message rps_spread_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Irps_spread_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a rps_spread_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns rps_spread_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rps_spread_type;

    /**
     * Decodes a rps_spread_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns rps_spread_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rps_spread_type;

    /**
     * Verifies a rps_spread_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a rps_spread_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns rps_spread_type
     */
    public static fromObject(object: { [k: string]: any }): rps_spread_type;

    /**
     * Creates a plain object from a rps_spread_type message. Also converts values to other types if specified.
     * @param message rps_spread_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rps_spread_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this rps_spread_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a plinko_detail. */
export class plinko_detail implements Iplinko_detail {

    /**
     * Constructs a new plinko_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iplinko_detail);

    /** plinko_detail issue. */
    public issue: (number|Long);

    /** plinko_detail betScores. */
    public betScores: (number|Long);

    /** plinko_detail level. */
    public level: number;

    /** plinko_detail color. */
    public color: number;

    /** plinko_detail odds. */
    public odds: number;

    /** plinko_detail reward. */
    public reward: (number|Long);

    /**
     * Creates a new plinko_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns plinko_detail instance
     */
    public static create(properties?: Iplinko_detail): plinko_detail;

    /**
     * Encodes the specified plinko_detail message. Does not implicitly {@link plinko_detail.verify|verify} messages.
     * @param message plinko_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iplinko_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified plinko_detail message, length delimited. Does not implicitly {@link plinko_detail.verify|verify} messages.
     * @param message plinko_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iplinko_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a plinko_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns plinko_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): plinko_detail;

    /**
     * Decodes a plinko_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns plinko_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): plinko_detail;

    /**
     * Verifies a plinko_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a plinko_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns plinko_detail
     */
    public static fromObject(object: { [k: string]: any }): plinko_detail;

    /**
     * Creates a plain object from a plinko_detail message. Also converts values to other types if specified.
     * @param message plinko_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: plinko_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this plinko_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a blackjack_detail. */
export class blackjack_detail implements Iblackjack_detail {

    /**
     * Constructs a new blackjack_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iblackjack_detail);

    /** blackjack_detail bankerCards. */
    public bankerCards: Icard_info[];

    /** blackjack_detail bankerPoints. */
    public bankerPoints: number;

    /** blackjack_detail posDetail. */
    public posDetail: Iblackjack_pos_detail[];

    /** blackjack_detail guessDetail. */
    public guessDetail: Iblackjack_guess_detail[];

    /**
     * Creates a new blackjack_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns blackjack_detail instance
     */
    public static create(properties?: Iblackjack_detail): blackjack_detail;

    /**
     * Encodes the specified blackjack_detail message. Does not implicitly {@link blackjack_detail.verify|verify} messages.
     * @param message blackjack_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iblackjack_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified blackjack_detail message, length delimited. Does not implicitly {@link blackjack_detail.verify|verify} messages.
     * @param message blackjack_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iblackjack_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a blackjack_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns blackjack_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blackjack_detail;

    /**
     * Decodes a blackjack_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns blackjack_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blackjack_detail;

    /**
     * Verifies a blackjack_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a blackjack_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns blackjack_detail
     */
    public static fromObject(object: { [k: string]: any }): blackjack_detail;

    /**
     * Creates a plain object from a blackjack_detail message. Also converts values to other types if specified.
     * @param message blackjack_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: blackjack_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this blackjack_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a blackjack_pos_detail. */
export class blackjack_pos_detail implements Iblackjack_pos_detail {

    /**
     * Constructs a new blackjack_pos_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iblackjack_pos_detail);

    /** blackjack_pos_detail pos. */
    public pos: number;

    /** blackjack_pos_detail id. */
    public id: number;

    /** blackjack_pos_detail userName. */
    public userName: string;

    /** blackjack_pos_detail isSelf. */
    public isSelf: boolean;

    /** blackjack_pos_detail betScores. */
    public betScores: (number|Long);

    /** blackjack_pos_detail cards. */
    public cards: Icard_info[];

    /** blackjack_pos_detail insurance. */
    public insurance: number;

    /** blackjack_pos_detail points. */
    public points: number;

    /** blackjack_pos_detail isWin. */
    public isWin: boolean;

    /** blackjack_pos_detail profit. */
    public profit: (number|Long);

    /**
     * Creates a new blackjack_pos_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns blackjack_pos_detail instance
     */
    public static create(properties?: Iblackjack_pos_detail): blackjack_pos_detail;

    /**
     * Encodes the specified blackjack_pos_detail message. Does not implicitly {@link blackjack_pos_detail.verify|verify} messages.
     * @param message blackjack_pos_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iblackjack_pos_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified blackjack_pos_detail message, length delimited. Does not implicitly {@link blackjack_pos_detail.verify|verify} messages.
     * @param message blackjack_pos_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iblackjack_pos_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a blackjack_pos_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns blackjack_pos_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blackjack_pos_detail;

    /**
     * Decodes a blackjack_pos_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns blackjack_pos_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blackjack_pos_detail;

    /**
     * Verifies a blackjack_pos_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a blackjack_pos_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns blackjack_pos_detail
     */
    public static fromObject(object: { [k: string]: any }): blackjack_pos_detail;

    /**
     * Creates a plain object from a blackjack_pos_detail message. Also converts values to other types if specified.
     * @param message blackjack_pos_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: blackjack_pos_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this blackjack_pos_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a blackjack_guess_detail. */
export class blackjack_guess_detail implements Iblackjack_guess_detail {

    /**
     * Constructs a new blackjack_guess_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iblackjack_guess_detail);

    /** blackjack_guess_detail betPos. */
    public betPos: number;

    /** blackjack_guess_detail betIsWin. */
    public betIsWin: boolean;

    /** blackjack_guess_detail betScores. */
    public betScores: (number|Long);

    /** blackjack_guess_detail reward. */
    public reward: (number|Long);

    /** blackjack_guess_detail isWin. */
    public isWin: boolean;

    /** blackjack_guess_detail profit. */
    public profit: (number|Long);

    /** blackjack_guess_detail cards. */
    public cards: Iblackjack_guess_cards[];

    /**
     * Creates a new blackjack_guess_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns blackjack_guess_detail instance
     */
    public static create(properties?: Iblackjack_guess_detail): blackjack_guess_detail;

    /**
     * Encodes the specified blackjack_guess_detail message. Does not implicitly {@link blackjack_guess_detail.verify|verify} messages.
     * @param message blackjack_guess_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iblackjack_guess_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified blackjack_guess_detail message, length delimited. Does not implicitly {@link blackjack_guess_detail.verify|verify} messages.
     * @param message blackjack_guess_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iblackjack_guess_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a blackjack_guess_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns blackjack_guess_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blackjack_guess_detail;

    /**
     * Decodes a blackjack_guess_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns blackjack_guess_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blackjack_guess_detail;

    /**
     * Verifies a blackjack_guess_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a blackjack_guess_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns blackjack_guess_detail
     */
    public static fromObject(object: { [k: string]: any }): blackjack_guess_detail;

    /**
     * Creates a plain object from a blackjack_guess_detail message. Also converts values to other types if specified.
     * @param message blackjack_guess_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: blackjack_guess_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this blackjack_guess_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a blackjack_guess_cards. */
export class blackjack_guess_cards implements Iblackjack_guess_cards {

    /**
     * Constructs a new blackjack_guess_cards.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iblackjack_guess_cards);

    /** blackjack_guess_cards cards. */
    public cards: Icard_info[];

    /**
     * Creates a new blackjack_guess_cards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns blackjack_guess_cards instance
     */
    public static create(properties?: Iblackjack_guess_cards): blackjack_guess_cards;

    /**
     * Encodes the specified blackjack_guess_cards message. Does not implicitly {@link blackjack_guess_cards.verify|verify} messages.
     * @param message blackjack_guess_cards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iblackjack_guess_cards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified blackjack_guess_cards message, length delimited. Does not implicitly {@link blackjack_guess_cards.verify|verify} messages.
     * @param message blackjack_guess_cards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iblackjack_guess_cards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a blackjack_guess_cards message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns blackjack_guess_cards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): blackjack_guess_cards;

    /**
     * Decodes a blackjack_guess_cards message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns blackjack_guess_cards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): blackjack_guess_cards;

    /**
     * Verifies a blackjack_guess_cards message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a blackjack_guess_cards message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns blackjack_guess_cards
     */
    public static fromObject(object: { [k: string]: any }): blackjack_guess_cards;

    /**
     * Creates a plain object from a blackjack_guess_cards message. Also converts values to other types if specified.
     * @param message blackjack_guess_cards
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: blackjack_guess_cards, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this blackjack_guess_cards to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a pachinko_detail. */
export class pachinko_detail implements Ipachinko_detail {

    /**
     * Constructs a new pachinko_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipachinko_detail);

    /** pachinko_detail ballNum. */
    public ballNum: number;

    /** pachinko_detail ballValue. */
    public ballValue: (number|Long);

    /** pachinko_detail winLose. */
    public winLose: (number|Long);

    /** pachinko_detail startTime. */
    public startTime: (number|Long);

    /** pachinko_detail endTime. */
    public endTime: (number|Long);

    /** pachinko_detail ballList. */
    public ballList: Iball_type[];

    /**
     * Creates a new pachinko_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pachinko_detail instance
     */
    public static create(properties?: Ipachinko_detail): pachinko_detail;

    /**
     * Encodes the specified pachinko_detail message. Does not implicitly {@link pachinko_detail.verify|verify} messages.
     * @param message pachinko_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipachinko_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pachinko_detail message, length delimited. Does not implicitly {@link pachinko_detail.verify|verify} messages.
     * @param message pachinko_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipachinko_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pachinko_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pachinko_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pachinko_detail;

    /**
     * Decodes a pachinko_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pachinko_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pachinko_detail;

    /**
     * Verifies a pachinko_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pachinko_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pachinko_detail
     */
    public static fromObject(object: { [k: string]: any }): pachinko_detail;

    /**
     * Creates a plain object from a pachinko_detail message. Also converts values to other types if specified.
     * @param message pachinko_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pachinko_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pachinko_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a ball_type. */
export class ball_type implements Iball_type {

    /**
     * Constructs a new ball_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iball_type);

    /** ball_type id. */
    public id: (number|Long);

    /** ball_type shootTime. */
    public shootTime: (number|Long);

    /** ball_type ballValue. */
    public ballValue: (number|Long);

    /** ball_type result. */
    public result: number;

    /** ball_type slotResult. */
    public slotResult: string;

    /** ball_type ballQuota. */
    public ballQuota: number;

    /** ball_type winBall. */
    public winBall: number;

    /** ball_type winLose. */
    public winLose: (number|Long);

    /**
     * Creates a new ball_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ball_type instance
     */
    public static create(properties?: Iball_type): ball_type;

    /**
     * Encodes the specified ball_type message. Does not implicitly {@link ball_type.verify|verify} messages.
     * @param message ball_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iball_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ball_type message, length delimited. Does not implicitly {@link ball_type.verify|verify} messages.
     * @param message ball_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iball_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ball_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ball_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ball_type;

    /**
     * Decodes a ball_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ball_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ball_type;

    /**
     * Verifies a ball_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ball_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ball_type
     */
    public static fromObject(object: { [k: string]: any }): ball_type;

    /**
     * Creates a plain object from a ball_type message. Also converts values to other types if specified.
     * @param message ball_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ball_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ball_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a scratchcards_detail. */
export class scratchcards_detail implements Iscratchcards_detail {

    /**
     * Constructs a new scratchcards_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iscratchcards_detail);

    /** scratchcards_detail cardId. */
    public cardId: (number|Long);

    /** scratchcards_detail cardValue. */
    public cardValue: (number|Long);

    /** scratchcards_detail reward. */
    public reward: (number|Long);

    /** scratchcards_detail gameList. */
    public gameList: Iscratch_cards_game_type[];

    /** scratchcards_detail seed. */
    public seed: string;

    /** scratchcards_detail seedHash. */
    public seedHash: string;

    /**
     * Creates a new scratchcards_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns scratchcards_detail instance
     */
    public static create(properties?: Iscratchcards_detail): scratchcards_detail;

    /**
     * Encodes the specified scratchcards_detail message. Does not implicitly {@link scratchcards_detail.verify|verify} messages.
     * @param message scratchcards_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iscratchcards_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified scratchcards_detail message, length delimited. Does not implicitly {@link scratchcards_detail.verify|verify} messages.
     * @param message scratchcards_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iscratchcards_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a scratchcards_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns scratchcards_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scratchcards_detail;

    /**
     * Decodes a scratchcards_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns scratchcards_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scratchcards_detail;

    /**
     * Verifies a scratchcards_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a scratchcards_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns scratchcards_detail
     */
    public static fromObject(object: { [k: string]: any }): scratchcards_detail;

    /**
     * Creates a plain object from a scratchcards_detail message. Also converts values to other types if specified.
     * @param message scratchcards_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: scratchcards_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this scratchcards_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a scratch_cards_game_type. */
export class scratch_cards_game_type implements Iscratch_cards_game_type {

    /**
     * Constructs a new scratch_cards_game_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iscratch_cards_game_type);

    /** scratch_cards_game_type luckyNumberList. */
    public luckyNumberList: Iarcade_num_info[];

    /** scratch_cards_game_type numberList. */
    public numberList: Iscratch_cards_number_type[];

    /**
     * Creates a new scratch_cards_game_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns scratch_cards_game_type instance
     */
    public static create(properties?: Iscratch_cards_game_type): scratch_cards_game_type;

    /**
     * Encodes the specified scratch_cards_game_type message. Does not implicitly {@link scratch_cards_game_type.verify|verify} messages.
     * @param message scratch_cards_game_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iscratch_cards_game_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified scratch_cards_game_type message, length delimited. Does not implicitly {@link scratch_cards_game_type.verify|verify} messages.
     * @param message scratch_cards_game_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iscratch_cards_game_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a scratch_cards_game_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns scratch_cards_game_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scratch_cards_game_type;

    /**
     * Decodes a scratch_cards_game_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns scratch_cards_game_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scratch_cards_game_type;

    /**
     * Verifies a scratch_cards_game_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a scratch_cards_game_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns scratch_cards_game_type
     */
    public static fromObject(object: { [k: string]: any }): scratch_cards_game_type;

    /**
     * Creates a plain object from a scratch_cards_game_type message. Also converts values to other types if specified.
     * @param message scratch_cards_game_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: scratch_cards_game_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this scratch_cards_game_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a scratch_cards_number_type. */
export class scratch_cards_number_type implements Iscratch_cards_number_type {

    /**
     * Constructs a new scratch_cards_number_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iscratch_cards_number_type);

    /** scratch_cards_number_type number. */
    public number: Iarcade_num_info[];

    /** scratch_cards_number_type otherNumber. */
    public otherNumber: Iarcade_num_info[];

    /** scratch_cards_number_type amount. */
    public amount: Iarcade_num_info[];

    /** scratch_cards_number_type isWin. */
    public isWin: boolean;

    /**
     * Creates a new scratch_cards_number_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns scratch_cards_number_type instance
     */
    public static create(properties?: Iscratch_cards_number_type): scratch_cards_number_type;

    /**
     * Encodes the specified scratch_cards_number_type message. Does not implicitly {@link scratch_cards_number_type.verify|verify} messages.
     * @param message scratch_cards_number_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iscratch_cards_number_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified scratch_cards_number_type message, length delimited. Does not implicitly {@link scratch_cards_number_type.verify|verify} messages.
     * @param message scratch_cards_number_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iscratch_cards_number_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a scratch_cards_number_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns scratch_cards_number_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scratch_cards_number_type;

    /**
     * Decodes a scratch_cards_number_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns scratch_cards_number_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scratch_cards_number_type;

    /**
     * Verifies a scratch_cards_number_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a scratch_cards_number_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns scratch_cards_number_type
     */
    public static fromObject(object: { [k: string]: any }): scratch_cards_number_type;

    /**
     * Creates a plain object from a scratch_cards_number_type message. Also converts values to other types if specified.
     * @param message scratch_cards_number_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: scratch_cards_number_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this scratch_cards_number_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an arcade_num_info. */
export class arcade_num_info implements Iarcade_num_info {

    /**
     * Constructs a new arcade_num_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iarcade_num_info);

    /** arcade_num_info num. */
    public num: (number|Long);

    /** arcade_num_info color. */
    public color: number;

    /**
     * Creates a new arcade_num_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns arcade_num_info instance
     */
    public static create(properties?: Iarcade_num_info): arcade_num_info;

    /**
     * Encodes the specified arcade_num_info message. Does not implicitly {@link arcade_num_info.verify|verify} messages.
     * @param message arcade_num_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iarcade_num_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified arcade_num_info message, length delimited. Does not implicitly {@link arcade_num_info.verify|verify} messages.
     * @param message arcade_num_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iarcade_num_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an arcade_num_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns arcade_num_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arcade_num_info;

    /**
     * Decodes an arcade_num_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns arcade_num_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arcade_num_info;

    /**
     * Verifies an arcade_num_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an arcade_num_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns arcade_num_info
     */
    public static fromObject(object: { [k: string]: any }): arcade_num_info;

    /**
     * Creates a plain object from an arcade_num_info message. Also converts values to other types if specified.
     * @param message arcade_num_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: arcade_num_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this arcade_num_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a pick_detail. */
export class pick_detail implements Ipick_detail {

    /**
     * Constructs a new pick_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipick_detail);

    /** pick_detail issue. */
    public issue: (number|Long);

    /** pick_detail risk. */
    public risk: number;

    /** pick_detail betScores. */
    public betScores: (number|Long);

    /** pick_detail odds. */
    public odds: number;

    /** pick_detail reward. */
    public reward: (number|Long);

    /** pick_detail spreadNumList. */
    public spreadNumList: number[];

    /**
     * Creates a new pick_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pick_detail instance
     */
    public static create(properties?: Ipick_detail): pick_detail;

    /**
     * Encodes the specified pick_detail message. Does not implicitly {@link pick_detail.verify|verify} messages.
     * @param message pick_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipick_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pick_detail message, length delimited. Does not implicitly {@link pick_detail.verify|verify} messages.
     * @param message pick_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipick_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pick_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pick_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pick_detail;

    /**
     * Decodes a pick_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pick_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pick_detail;

    /**
     * Verifies a pick_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pick_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pick_detail
     */
    public static fromObject(object: { [k: string]: any }): pick_detail;

    /**
     * Creates a plain object from a pick_detail message. Also converts values to other types if specified.
     * @param message pick_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pick_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pick_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an area_detail. */
export class area_detail implements Iarea_detail {

    /**
     * Constructs a new area_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iarea_detail);

    /** area_detail detail. */
    public detail: Iarea_detail_type[];

    /**
     * Creates a new area_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns area_detail instance
     */
    public static create(properties?: Iarea_detail): area_detail;

    /**
     * Encodes the specified area_detail message. Does not implicitly {@link area_detail.verify|verify} messages.
     * @param message area_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iarea_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified area_detail message, length delimited. Does not implicitly {@link area_detail.verify|verify} messages.
     * @param message area_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iarea_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an area_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns area_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): area_detail;

    /**
     * Decodes an area_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns area_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): area_detail;

    /**
     * Verifies an area_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an area_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns area_detail
     */
    public static fromObject(object: { [k: string]: any }): area_detail;

    /**
     * Creates a plain object from an area_detail message. Also converts values to other types if specified.
     * @param message area_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: area_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this area_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an area_detail_type. */
export class area_detail_type implements Iarea_detail_type {

    /**
     * Constructs a new area_detail_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iarea_detail_type);

    /** area_detail_type areaId. */
    public areaId: number;

    /** area_detail_type cards. */
    public cards: Icard_info[];

    /** area_detail_type cardType. */
    public cardType: number;

    /** area_detail_type betScores. */
    public betScores: (number|Long);

    /** area_detail_type multi. */
    public multi: number;

    /** area_detail_type isWin. */
    public isWin: boolean;

    /** area_detail_type profit. */
    public profit: (number|Long);

    /**
     * Creates a new area_detail_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns area_detail_type instance
     */
    public static create(properties?: Iarea_detail_type): area_detail_type;

    /**
     * Encodes the specified area_detail_type message. Does not implicitly {@link area_detail_type.verify|verify} messages.
     * @param message area_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iarea_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified area_detail_type message, length delimited. Does not implicitly {@link area_detail_type.verify|verify} messages.
     * @param message area_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iarea_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an area_detail_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns area_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): area_detail_type;

    /**
     * Decodes an area_detail_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns area_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): area_detail_type;

    /**
     * Verifies an area_detail_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an area_detail_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns area_detail_type
     */
    public static fromObject(object: { [k: string]: any }): area_detail_type;

    /**
     * Creates a plain object from an area_detail_type message. Also converts values to other types if specified.
     * @param message area_detail_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: area_detail_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this area_detail_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a texas_detail. */
export class texas_detail implements Itexas_detail {

    /**
     * Constructs a new texas_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itexas_detail);

    /** texas_detail total. */
    public total: Itexas_total_detail;

    /** texas_detail cutDetail. */
    public cutDetail?: (Itexas_cut_detail|null);

    /** texas_detail roundDetail. */
    public roundDetail: Itexas_round_detail[];

    /** texas_detail insuranceDetail. */
    public insuranceDetail: Itexas_insurance_detail[];

    /**
     * Creates a new texas_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns texas_detail instance
     */
    public static create(properties?: Itexas_detail): texas_detail;

    /**
     * Encodes the specified texas_detail message. Does not implicitly {@link texas_detail.verify|verify} messages.
     * @param message texas_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itexas_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified texas_detail message, length delimited. Does not implicitly {@link texas_detail.verify|verify} messages.
     * @param message texas_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itexas_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a texas_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns texas_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): texas_detail;

    /**
     * Decodes a texas_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns texas_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): texas_detail;

    /**
     * Verifies a texas_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a texas_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns texas_detail
     */
    public static fromObject(object: { [k: string]: any }): texas_detail;

    /**
     * Creates a plain object from a texas_detail message. Also converts values to other types if specified.
     * @param message texas_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: texas_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this texas_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a texas_total_detail. */
export class texas_total_detail implements Itexas_total_detail {

    /**
     * Constructs a new texas_total_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itexas_total_detail);

    /** texas_total_detail posDetail. */
    public posDetail: Itexas_pos_detail[];

    /** texas_total_detail betScores. */
    public betScores: (number|Long);

    /**
     * Creates a new texas_total_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns texas_total_detail instance
     */
    public static create(properties?: Itexas_total_detail): texas_total_detail;

    /**
     * Encodes the specified texas_total_detail message. Does not implicitly {@link texas_total_detail.verify|verify} messages.
     * @param message texas_total_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itexas_total_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified texas_total_detail message, length delimited. Does not implicitly {@link texas_total_detail.verify|verify} messages.
     * @param message texas_total_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itexas_total_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a texas_total_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns texas_total_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): texas_total_detail;

    /**
     * Decodes a texas_total_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns texas_total_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): texas_total_detail;

    /**
     * Verifies a texas_total_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a texas_total_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns texas_total_detail
     */
    public static fromObject(object: { [k: string]: any }): texas_total_detail;

    /**
     * Creates a plain object from a texas_total_detail message. Also converts values to other types if specified.
     * @param message texas_total_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: texas_total_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this texas_total_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a texas_cut_detail. */
export class texas_cut_detail implements Itexas_cut_detail {

    /**
     * Constructs a new texas_cut_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itexas_cut_detail);

    /** texas_cut_detail pos. */
    public pos: number;

    /** texas_cut_detail userName. */
    public userName: string;

    /** texas_cut_detail cutIndex. */
    public cutIndex: number;

    /**
     * Creates a new texas_cut_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns texas_cut_detail instance
     */
    public static create(properties?: Itexas_cut_detail): texas_cut_detail;

    /**
     * Encodes the specified texas_cut_detail message. Does not implicitly {@link texas_cut_detail.verify|verify} messages.
     * @param message texas_cut_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itexas_cut_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified texas_cut_detail message, length delimited. Does not implicitly {@link texas_cut_detail.verify|verify} messages.
     * @param message texas_cut_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itexas_cut_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a texas_cut_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns texas_cut_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): texas_cut_detail;

    /**
     * Decodes a texas_cut_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns texas_cut_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): texas_cut_detail;

    /**
     * Verifies a texas_cut_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a texas_cut_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns texas_cut_detail
     */
    public static fromObject(object: { [k: string]: any }): texas_cut_detail;

    /**
     * Creates a plain object from a texas_cut_detail message. Also converts values to other types if specified.
     * @param message texas_cut_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: texas_cut_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this texas_cut_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a texas_round_detail. */
export class texas_round_detail implements Itexas_round_detail {

    /**
     * Constructs a new texas_round_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itexas_round_detail);

    /** texas_round_detail roundCount. */
    public roundCount: number;

    /** texas_round_detail betScores. */
    public betScores: (number|Long);

    /** texas_round_detail posDetail. */
    public posDetail: Itexas_pos_detail[];

    /**
     * Creates a new texas_round_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns texas_round_detail instance
     */
    public static create(properties?: Itexas_round_detail): texas_round_detail;

    /**
     * Encodes the specified texas_round_detail message. Does not implicitly {@link texas_round_detail.verify|verify} messages.
     * @param message texas_round_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itexas_round_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified texas_round_detail message, length delimited. Does not implicitly {@link texas_round_detail.verify|verify} messages.
     * @param message texas_round_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itexas_round_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a texas_round_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns texas_round_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): texas_round_detail;

    /**
     * Decodes a texas_round_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns texas_round_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): texas_round_detail;

    /**
     * Verifies a texas_round_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a texas_round_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns texas_round_detail
     */
    public static fromObject(object: { [k: string]: any }): texas_round_detail;

    /**
     * Creates a plain object from a texas_round_detail message. Also converts values to other types if specified.
     * @param message texas_round_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: texas_round_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this texas_round_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a texas_insurance_detail. */
export class texas_insurance_detail implements Itexas_insurance_detail {

    /**
     * Constructs a new texas_insurance_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itexas_insurance_detail);

    /** texas_insurance_detail cards. */
    public cards: Icard_info[];

    /** texas_insurance_detail decisiveCards. */
    public decisiveCards: Icard_info[];

    /** texas_insurance_detail insuranceType. */
    public insuranceType: number;

    /** texas_insurance_detail insuranceBet. */
    public insuranceBet: (number|Long);

    /** texas_insurance_detail reward. */
    public reward: (number|Long);

    /** texas_insurance_detail profit. */
    public profit: (number|Long);

    /**
     * Creates a new texas_insurance_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns texas_insurance_detail instance
     */
    public static create(properties?: Itexas_insurance_detail): texas_insurance_detail;

    /**
     * Encodes the specified texas_insurance_detail message. Does not implicitly {@link texas_insurance_detail.verify|verify} messages.
     * @param message texas_insurance_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itexas_insurance_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified texas_insurance_detail message, length delimited. Does not implicitly {@link texas_insurance_detail.verify|verify} messages.
     * @param message texas_insurance_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itexas_insurance_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a texas_insurance_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns texas_insurance_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): texas_insurance_detail;

    /**
     * Decodes a texas_insurance_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns texas_insurance_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): texas_insurance_detail;

    /**
     * Verifies a texas_insurance_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a texas_insurance_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns texas_insurance_detail
     */
    public static fromObject(object: { [k: string]: any }): texas_insurance_detail;

    /**
     * Creates a plain object from a texas_insurance_detail message. Also converts values to other types if specified.
     * @param message texas_insurance_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: texas_insurance_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this texas_insurance_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a texas_pos_detail. */
export class texas_pos_detail implements Itexas_pos_detail {

    /**
     * Constructs a new texas_pos_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itexas_pos_detail);

    /** texas_pos_detail pos. */
    public pos: number;

    /** texas_pos_detail userName. */
    public userName: string;

    /** texas_pos_detail isSelf. */
    public isSelf: boolean;

    /** texas_pos_detail cards. */
    public cards: Icard_info[];

    /** texas_pos_detail decisiveCards. */
    public decisiveCards: Icard_info[];

    /** texas_pos_detail cardType. */
    public cardType: number;

    /** texas_pos_detail tag. */
    public tag: number;

    /** texas_pos_detail playState. */
    public playState: number;

    /** texas_pos_detail betScores. */
    public betScores: (number|Long);

    /** texas_pos_detail profit. */
    public profit: (number|Long);

    /**
     * Creates a new texas_pos_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns texas_pos_detail instance
     */
    public static create(properties?: Itexas_pos_detail): texas_pos_detail;

    /**
     * Encodes the specified texas_pos_detail message. Does not implicitly {@link texas_pos_detail.verify|verify} messages.
     * @param message texas_pos_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itexas_pos_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified texas_pos_detail message, length delimited. Does not implicitly {@link texas_pos_detail.verify|verify} messages.
     * @param message texas_pos_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itexas_pos_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a texas_pos_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns texas_pos_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): texas_pos_detail;

    /**
     * Decodes a texas_pos_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns texas_pos_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): texas_pos_detail;

    /**
     * Verifies a texas_pos_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a texas_pos_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns texas_pos_detail
     */
    public static fromObject(object: { [k: string]: any }): texas_pos_detail;

    /**
     * Creates a plain object from a texas_pos_detail message. Also converts values to other types if specified.
     * @param message texas_pos_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: texas_pos_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this texas_pos_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a crash_detail. */
export class crash_detail implements Icrash_detail {

    /**
     * Constructs a new crash_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icrash_detail);

    /** crash_detail crashPoint. */
    public crashPoint: number;

    /** crash_detail escapePoint. */
    public escapePoint: number;

    /** crash_detail betScores. */
    public betScores: (number|Long);

    /** crash_detail state. */
    public state: msg_state;

    /** crash_detail profit. */
    public profit: (number|Long);

    /**
     * Creates a new crash_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns crash_detail instance
     */
    public static create(properties?: Icrash_detail): crash_detail;

    /**
     * Encodes the specified crash_detail message. Does not implicitly {@link crash_detail.verify|verify} messages.
     * @param message crash_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icrash_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified crash_detail message, length delimited. Does not implicitly {@link crash_detail.verify|verify} messages.
     * @param message crash_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icrash_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a crash_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns crash_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crash_detail;

    /**
     * Decodes a crash_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns crash_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crash_detail;

    /**
     * Verifies a crash_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a crash_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns crash_detail
     */
    public static fromObject(object: { [k: string]: any }): crash_detail;

    /**
     * Creates a plain object from a crash_detail message. Also converts values to other types if specified.
     * @param message crash_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: crash_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this crash_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a wheel_detail. */
export class wheel_detail implements Iwheel_detail {

    /**
     * Constructs a new wheel_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iwheel_detail);

    /** wheel_detail issue. */
    public issue: (number|Long);

    /** wheel_detail risk. */
    public risk: number;

    /** wheel_detail roundNum. */
    public roundNum: number;

    /** wheel_detail betScores. */
    public betScores: (number|Long);

    /** wheel_detail odds. */
    public odds: number;

    /** wheel_detail reward. */
    public reward: (number|Long);

    /** wheel_detail spreadColor. */
    public spreadColor: number;

    /**
     * Creates a new wheel_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns wheel_detail instance
     */
    public static create(properties?: Iwheel_detail): wheel_detail;

    /**
     * Encodes the specified wheel_detail message. Does not implicitly {@link wheel_detail.verify|verify} messages.
     * @param message wheel_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iwheel_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified wheel_detail message, length delimited. Does not implicitly {@link wheel_detail.verify|verify} messages.
     * @param message wheel_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iwheel_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a wheel_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns wheel_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wheel_detail;

    /**
     * Decodes a wheel_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns wheel_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wheel_detail;

    /**
     * Verifies a wheel_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a wheel_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns wheel_detail
     */
    public static fromObject(object: { [k: string]: any }): wheel_detail;

    /**
     * Creates a plain object from a wheel_detail message. Also converts values to other types if specified.
     * @param message wheel_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: wheel_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this wheel_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lucky_detail. */
export class lucky_detail implements Ilucky_detail {

    /**
     * Constructs a new lucky_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilucky_detail);

    /** lucky_detail issue. */
    public issue: (number|Long);

    /** lucky_detail betTime. */
    public betTime: (number|Long);

    /** lucky_detail hits. */
    public hits: number;

    /** lucky_detail isWin. */
    public isWin: boolean;

    /** lucky_detail reward. */
    public reward: (number|Long);

    /** lucky_detail spreadNumList. */
    public spreadNumList: number[];

    /** lucky_detail gridInfo. */
    public gridInfo: Ilucky_grid_type[];

    /**
     * Creates a new lucky_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lucky_detail instance
     */
    public static create(properties?: Ilucky_detail): lucky_detail;

    /**
     * Encodes the specified lucky_detail message. Does not implicitly {@link lucky_detail.verify|verify} messages.
     * @param message lucky_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilucky_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lucky_detail message, length delimited. Does not implicitly {@link lucky_detail.verify|verify} messages.
     * @param message lucky_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilucky_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lucky_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lucky_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lucky_detail;

    /**
     * Decodes a lucky_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lucky_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lucky_detail;

    /**
     * Verifies a lucky_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lucky_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lucky_detail
     */
    public static fromObject(object: { [k: string]: any }): lucky_detail;

    /**
     * Creates a plain object from a lucky_detail message. Also converts values to other types if specified.
     * @param message lucky_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lucky_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lucky_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lucky_grid_type. */
export class lucky_grid_type implements Ilucky_grid_type {

    /**
     * Constructs a new lucky_grid_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilucky_grid_type);

    /** lucky_grid_type index. */
    public index: number;

    /** lucky_grid_type isClick. */
    public isClick: boolean;

    /** lucky_grid_type isHit. */
    public isHit: boolean;

    /** lucky_grid_type number. */
    public number: number;

    /**
     * Creates a new lucky_grid_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lucky_grid_type instance
     */
    public static create(properties?: Ilucky_grid_type): lucky_grid_type;

    /**
     * Encodes the specified lucky_grid_type message. Does not implicitly {@link lucky_grid_type.verify|verify} messages.
     * @param message lucky_grid_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilucky_grid_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lucky_grid_type message, length delimited. Does not implicitly {@link lucky_grid_type.verify|verify} messages.
     * @param message lucky_grid_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilucky_grid_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lucky_grid_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lucky_grid_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lucky_grid_type;

    /**
     * Decodes a lucky_grid_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lucky_grid_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lucky_grid_type;

    /**
     * Verifies a lucky_grid_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lucky_grid_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lucky_grid_type
     */
    public static fromObject(object: { [k: string]: any }): lucky_grid_type;

    /**
     * Creates a plain object from a lucky_grid_type message. Also converts values to other types if specified.
     * @param message lucky_grid_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lucky_grid_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lucky_grid_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a flush_detail. */
export class flush_detail implements Iflush_detail {

    /**
     * Constructs a new flush_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iflush_detail);

    /** flush_detail rounds. */
    public rounds?: (Iflush_round_type|null);

    /** flush_detail fast. */
    public fast?: (Iflush_fast_type|null);

    /**
     * Creates a new flush_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns flush_detail instance
     */
    public static create(properties?: Iflush_detail): flush_detail;

    /**
     * Encodes the specified flush_detail message. Does not implicitly {@link flush_detail.verify|verify} messages.
     * @param message flush_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iflush_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified flush_detail message, length delimited. Does not implicitly {@link flush_detail.verify|verify} messages.
     * @param message flush_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iflush_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a flush_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns flush_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flush_detail;

    /**
     * Decodes a flush_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns flush_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flush_detail;

    /**
     * Verifies a flush_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a flush_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns flush_detail
     */
    public static fromObject(object: { [k: string]: any }): flush_detail;

    /**
     * Creates a plain object from a flush_detail message. Also converts values to other types if specified.
     * @param message flush_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: flush_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this flush_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a flush_round_type. */
export class flush_round_type implements Iflush_round_type {

    /**
     * Constructs a new flush_round_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iflush_round_type);

    /** flush_round_type roundProcess. */
    public roundProcess: Iflush_round_process_type[];

    /** flush_round_type settleDetail. */
    public settleDetail: Iflush_detail_type[];

    /**
     * Creates a new flush_round_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns flush_round_type instance
     */
    public static create(properties?: Iflush_round_type): flush_round_type;

    /**
     * Encodes the specified flush_round_type message. Does not implicitly {@link flush_round_type.verify|verify} messages.
     * @param message flush_round_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iflush_round_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified flush_round_type message, length delimited. Does not implicitly {@link flush_round_type.verify|verify} messages.
     * @param message flush_round_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iflush_round_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a flush_round_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns flush_round_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flush_round_type;

    /**
     * Decodes a flush_round_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns flush_round_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flush_round_type;

    /**
     * Verifies a flush_round_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a flush_round_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns flush_round_type
     */
    public static fromObject(object: { [k: string]: any }): flush_round_type;

    /**
     * Creates a plain object from a flush_round_type message. Also converts values to other types if specified.
     * @param message flush_round_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: flush_round_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this flush_round_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a flush_round_process_type. */
export class flush_round_process_type implements Iflush_round_process_type {

    /**
     * Constructs a new flush_round_process_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iflush_round_process_type);

    /** flush_round_process_type roundCount. */
    public roundCount: number;

    /** flush_round_process_type process. */
    public process: Iflush_process_type[];

    /**
     * Creates a new flush_round_process_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns flush_round_process_type instance
     */
    public static create(properties?: Iflush_round_process_type): flush_round_process_type;

    /**
     * Encodes the specified flush_round_process_type message. Does not implicitly {@link flush_round_process_type.verify|verify} messages.
     * @param message flush_round_process_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iflush_round_process_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified flush_round_process_type message, length delimited. Does not implicitly {@link flush_round_process_type.verify|verify} messages.
     * @param message flush_round_process_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iflush_round_process_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a flush_round_process_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns flush_round_process_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flush_round_process_type;

    /**
     * Decodes a flush_round_process_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns flush_round_process_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flush_round_process_type;

    /**
     * Verifies a flush_round_process_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a flush_round_process_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns flush_round_process_type
     */
    public static fromObject(object: { [k: string]: any }): flush_round_process_type;

    /**
     * Creates a plain object from a flush_round_process_type message. Also converts values to other types if specified.
     * @param message flush_round_process_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: flush_round_process_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this flush_round_process_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a flush_process_type. */
export class flush_process_type implements Iflush_process_type {

    /**
     * Constructs a new flush_process_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iflush_process_type);

    /** flush_process_type pos. */
    public pos: number;

    /** flush_process_type userName. */
    public userName: string;

    /** flush_process_type isSelf. */
    public isSelf: boolean;

    /** flush_process_type opType. */
    public opType: number;

    /** flush_process_type betScores. */
    public betScores: (number|Long);

    /** flush_process_type isCompareWin. */
    public isCompareWin: boolean;

    /**
     * Creates a new flush_process_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns flush_process_type instance
     */
    public static create(properties?: Iflush_process_type): flush_process_type;

    /**
     * Encodes the specified flush_process_type message. Does not implicitly {@link flush_process_type.verify|verify} messages.
     * @param message flush_process_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iflush_process_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified flush_process_type message, length delimited. Does not implicitly {@link flush_process_type.verify|verify} messages.
     * @param message flush_process_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iflush_process_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a flush_process_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns flush_process_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flush_process_type;

    /**
     * Decodes a flush_process_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns flush_process_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flush_process_type;

    /**
     * Verifies a flush_process_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a flush_process_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns flush_process_type
     */
    public static fromObject(object: { [k: string]: any }): flush_process_type;

    /**
     * Creates a plain object from a flush_process_type message. Also converts values to other types if specified.
     * @param message flush_process_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: flush_process_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this flush_process_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a flush_fast_type. */
export class flush_fast_type implements Iflush_fast_type {

    /**
     * Constructs a new flush_fast_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iflush_fast_type);

    /** flush_fast_type roundCount. */
    public roundCount: number;

    /** flush_fast_type detail. */
    public detail: Iflush_detail_type[];

    /**
     * Creates a new flush_fast_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns flush_fast_type instance
     */
    public static create(properties?: Iflush_fast_type): flush_fast_type;

    /**
     * Encodes the specified flush_fast_type message. Does not implicitly {@link flush_fast_type.verify|verify} messages.
     * @param message flush_fast_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iflush_fast_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified flush_fast_type message, length delimited. Does not implicitly {@link flush_fast_type.verify|verify} messages.
     * @param message flush_fast_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iflush_fast_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a flush_fast_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns flush_fast_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flush_fast_type;

    /**
     * Decodes a flush_fast_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns flush_fast_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flush_fast_type;

    /**
     * Verifies a flush_fast_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a flush_fast_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns flush_fast_type
     */
    public static fromObject(object: { [k: string]: any }): flush_fast_type;

    /**
     * Creates a plain object from a flush_fast_type message. Also converts values to other types if specified.
     * @param message flush_fast_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: flush_fast_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this flush_fast_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a flush_detail_type. */
export class flush_detail_type implements Iflush_detail_type {

    /**
     * Constructs a new flush_detail_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iflush_detail_type);

    /** flush_detail_type pos. */
    public pos: number;

    /** flush_detail_type userName. */
    public userName: string;

    /** flush_detail_type isSelf. */
    public isSelf: boolean;

    /** flush_detail_type cards. */
    public cards: Icard_info[];

    /** flush_detail_type profit. */
    public profit: (number|Long);

    /** flush_detail_type cardType. */
    public cardType: number;

    /** flush_detail_type isSpecial. */
    public isSpecial: boolean;

    /** flush_detail_type multi. */
    public multi: number;

    /** flush_detail_type betScores. */
    public betScores: (number|Long);

    /** flush_detail_type winScores. */
    public winScores: (number|Long);

    /** flush_detail_type leopardLuckyWin. */
    public leopardLuckyWin: (number|Long);

    /**
     * Creates a new flush_detail_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns flush_detail_type instance
     */
    public static create(properties?: Iflush_detail_type): flush_detail_type;

    /**
     * Encodes the specified flush_detail_type message. Does not implicitly {@link flush_detail_type.verify|verify} messages.
     * @param message flush_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iflush_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified flush_detail_type message, length delimited. Does not implicitly {@link flush_detail_type.verify|verify} messages.
     * @param message flush_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iflush_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a flush_detail_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns flush_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flush_detail_type;

    /**
     * Decodes a flush_detail_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns flush_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): flush_detail_type;

    /**
     * Verifies a flush_detail_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a flush_detail_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns flush_detail_type
     */
    public static fromObject(object: { [k: string]: any }): flush_detail_type;

    /**
     * Creates a plain object from a flush_detail_type message. Also converts values to other types if specified.
     * @param message flush_detail_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: flush_detail_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this flush_detail_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an adventure_detail. */
export class adventure_detail implements Iadventure_detail {

    /**
     * Constructs a new adventure_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iadventure_detail);

    /** adventure_detail monster. */
    public monster: number;

    /** adventure_detail isDead. */
    public isDead: boolean;

    /**
     * Creates a new adventure_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns adventure_detail instance
     */
    public static create(properties?: Iadventure_detail): adventure_detail;

    /**
     * Encodes the specified adventure_detail message. Does not implicitly {@link adventure_detail.verify|verify} messages.
     * @param message adventure_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iadventure_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified adventure_detail message, length delimited. Does not implicitly {@link adventure_detail.verify|verify} messages.
     * @param message adventure_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iadventure_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an adventure_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns adventure_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): adventure_detail;

    /**
     * Decodes an adventure_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns adventure_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): adventure_detail;

    /**
     * Verifies an adventure_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an adventure_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns adventure_detail
     */
    public static fromObject(object: { [k: string]: any }): adventure_detail;

    /**
     * Creates a plain object from an adventure_detail message. Also converts values to other types if specified.
     * @param message adventure_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: adventure_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this adventure_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a wheel2_detail. */
export class wheel2_detail implements Iwheel2_detail {

    /**
     * Constructs a new wheel2_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iwheel2_detail);

    /** wheel2_detail fanIdx. */
    public fanIdx: number;

    /** wheel2_detail starSlot. */
    public starSlot: number[];

    /** wheel2_detail odds. */
    public odds: (number|Long);

    /** wheel2_detail task. */
    public task: wheel2_detail.Iwheel2TaskType[];

    /**
     * Creates a new wheel2_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns wheel2_detail instance
     */
    public static create(properties?: Iwheel2_detail): wheel2_detail;

    /**
     * Encodes the specified wheel2_detail message. Does not implicitly {@link wheel2_detail.verify|verify} messages.
     * @param message wheel2_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iwheel2_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified wheel2_detail message, length delimited. Does not implicitly {@link wheel2_detail.verify|verify} messages.
     * @param message wheel2_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iwheel2_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a wheel2_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns wheel2_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wheel2_detail;

    /**
     * Decodes a wheel2_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns wheel2_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wheel2_detail;

    /**
     * Verifies a wheel2_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a wheel2_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns wheel2_detail
     */
    public static fromObject(object: { [k: string]: any }): wheel2_detail;

    /**
     * Creates a plain object from a wheel2_detail message. Also converts values to other types if specified.
     * @param message wheel2_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: wheel2_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this wheel2_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace wheel2_detail {

    /** Properties of a wheel2TaskType. */
    interface Iwheel2TaskType {

        /** wheel2TaskType id */
        id: number;

        /** wheel2TaskType num */
        num: number;

        /** wheel2TaskType targetNum */
        targetNum: number;
    }

    /** Represents a wheel2TaskType. */
    class wheel2TaskType implements Iwheel2TaskType {

        /**
         * Constructs a new wheel2TaskType.
         * @param [properties] Properties to set
         */
        constructor(properties?: wheel2_detail.Iwheel2TaskType);

        /** wheel2TaskType id. */
        public id: number;

        /** wheel2TaskType num. */
        public num: number;

        /** wheel2TaskType targetNum. */
        public targetNum: number;

        /**
         * Creates a new wheel2TaskType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns wheel2TaskType instance
         */
        public static create(properties?: wheel2_detail.Iwheel2TaskType): wheel2_detail.wheel2TaskType;

        /**
         * Encodes the specified wheel2TaskType message. Does not implicitly {@link wheel2_detail.wheel2TaskType.verify|verify} messages.
         * @param message wheel2TaskType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: wheel2_detail.Iwheel2TaskType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified wheel2TaskType message, length delimited. Does not implicitly {@link wheel2_detail.wheel2TaskType.verify|verify} messages.
         * @param message wheel2TaskType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: wheel2_detail.Iwheel2TaskType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a wheel2TaskType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns wheel2TaskType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wheel2_detail.wheel2TaskType;

        /**
         * Decodes a wheel2TaskType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns wheel2TaskType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wheel2_detail.wheel2TaskType;

        /**
         * Verifies a wheel2TaskType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a wheel2TaskType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns wheel2TaskType
         */
        public static fromObject(object: { [k: string]: any }): wheel2_detail.wheel2TaskType;

        /**
         * Creates a plain object from a wheel2TaskType message. Also converts values to other types if specified.
         * @param message wheel2TaskType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: wheel2_detail.wheel2TaskType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this wheel2TaskType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a card5_detail. */
export class card5_detail implements Icard5_detail {

    /**
     * Constructs a new card5_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icard5_detail);

    /** card5_detail issue. */
    public issue: (number|Long);

    /** card5_detail cardShow. */
    public cardShow: Icard5ShowType[];

    /** card5_detail rewardLevel. */
    public rewardLevel: number;

    /** card5_detail betScores. */
    public betScores: (number|Long);

    /** card5_detail cardLevel. */
    public cardLevel: number;

    /** card5_detail raiseLevel. */
    public raiseLevel: number;

    /** card5_detail winScores. */
    public winScores: (number|Long);

    /**
     * Creates a new card5_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns card5_detail instance
     */
    public static create(properties?: Icard5_detail): card5_detail;

    /**
     * Encodes the specified card5_detail message. Does not implicitly {@link card5_detail.verify|verify} messages.
     * @param message card5_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icard5_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified card5_detail message, length delimited. Does not implicitly {@link card5_detail.verify|verify} messages.
     * @param message card5_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icard5_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a card5_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns card5_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card5_detail;

    /**
     * Decodes a card5_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns card5_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): card5_detail;

    /**
     * Verifies a card5_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a card5_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns card5_detail
     */
    public static fromObject(object: { [k: string]: any }): card5_detail;

    /**
     * Creates a plain object from a card5_detail message. Also converts values to other types if specified.
     * @param message card5_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: card5_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this card5_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a pok_deng_detail. */
export class pok_deng_detail implements Ipok_deng_detail {

    /**
     * Constructs a new pok_deng_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipok_deng_detail);

    /** pok_deng_detail bankerDetail. */
    public bankerDetail: pok_deng_detail.IpokDengBankerDetailType;

    /** pok_deng_detail roleDetail. */
    public roleDetail: pok_deng_detail.IpokDengDetailType[];

    /**
     * Creates a new pok_deng_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pok_deng_detail instance
     */
    public static create(properties?: Ipok_deng_detail): pok_deng_detail;

    /**
     * Encodes the specified pok_deng_detail message. Does not implicitly {@link pok_deng_detail.verify|verify} messages.
     * @param message pok_deng_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipok_deng_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pok_deng_detail message, length delimited. Does not implicitly {@link pok_deng_detail.verify|verify} messages.
     * @param message pok_deng_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipok_deng_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pok_deng_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pok_deng_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pok_deng_detail;

    /**
     * Decodes a pok_deng_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pok_deng_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pok_deng_detail;

    /**
     * Verifies a pok_deng_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pok_deng_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pok_deng_detail
     */
    public static fromObject(object: { [k: string]: any }): pok_deng_detail;

    /**
     * Creates a plain object from a pok_deng_detail message. Also converts values to other types if specified.
     * @param message pok_deng_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pok_deng_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pok_deng_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace pok_deng_detail {

    /** Properties of a pokDengBankerDetailType. */
    interface IpokDengBankerDetailType {

        /** pokDengBankerDetailType card */
        card?: (Icard_info[]|null);

        /** pokDengBankerDetailType cardType */
        cardType: number;
    }

    /** Represents a pokDengBankerDetailType. */
    class pokDengBankerDetailType implements IpokDengBankerDetailType {

        /**
         * Constructs a new pokDengBankerDetailType.
         * @param [properties] Properties to set
         */
        constructor(properties?: pok_deng_detail.IpokDengBankerDetailType);

        /** pokDengBankerDetailType card. */
        public card: Icard_info[];

        /** pokDengBankerDetailType cardType. */
        public cardType: number;

        /**
         * Creates a new pokDengBankerDetailType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pokDengBankerDetailType instance
         */
        public static create(properties?: pok_deng_detail.IpokDengBankerDetailType): pok_deng_detail.pokDengBankerDetailType;

        /**
         * Encodes the specified pokDengBankerDetailType message. Does not implicitly {@link pok_deng_detail.pokDengBankerDetailType.verify|verify} messages.
         * @param message pokDengBankerDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pok_deng_detail.IpokDengBankerDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pokDengBankerDetailType message, length delimited. Does not implicitly {@link pok_deng_detail.pokDengBankerDetailType.verify|verify} messages.
         * @param message pokDengBankerDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pok_deng_detail.IpokDengBankerDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pokDengBankerDetailType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pokDengBankerDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pok_deng_detail.pokDengBankerDetailType;

        /**
         * Decodes a pokDengBankerDetailType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pokDengBankerDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pok_deng_detail.pokDengBankerDetailType;

        /**
         * Verifies a pokDengBankerDetailType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pokDengBankerDetailType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pokDengBankerDetailType
         */
        public static fromObject(object: { [k: string]: any }): pok_deng_detail.pokDengBankerDetailType;

        /**
         * Creates a plain object from a pokDengBankerDetailType message. Also converts values to other types if specified.
         * @param message pokDengBankerDetailType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pok_deng_detail.pokDengBankerDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pokDengBankerDetailType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a pokDengDetailType. */
    interface IpokDengDetailType {

        /** pokDengDetailType isSelf */
        isSelf: boolean;

        /** pokDengDetailType userName */
        userName: string;

        /** pokDengDetailType isOutCard */
        isOutCard: boolean;

        /** pokDengDetailType betScores */
        betScores: (number|Long);

        /** pokDengDetailType card */
        card?: (Icard_info[]|null);

        /** pokDengDetailType cardType */
        cardType: number;

        /** pokDengDetailType point */
        point: number;

        /** pokDengDetailType winLose */
        winLose: (number|Long);

        /** pokDengDetailType tax */
        tax: (number|Long);
    }

    /** Represents a pokDengDetailType. */
    class pokDengDetailType implements IpokDengDetailType {

        /**
         * Constructs a new pokDengDetailType.
         * @param [properties] Properties to set
         */
        constructor(properties?: pok_deng_detail.IpokDengDetailType);

        /** pokDengDetailType isSelf. */
        public isSelf: boolean;

        /** pokDengDetailType userName. */
        public userName: string;

        /** pokDengDetailType isOutCard. */
        public isOutCard: boolean;

        /** pokDengDetailType betScores. */
        public betScores: (number|Long);

        /** pokDengDetailType card. */
        public card: Icard_info[];

        /** pokDengDetailType cardType. */
        public cardType: number;

        /** pokDengDetailType point. */
        public point: number;

        /** pokDengDetailType winLose. */
        public winLose: (number|Long);

        /** pokDengDetailType tax. */
        public tax: (number|Long);

        /**
         * Creates a new pokDengDetailType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pokDengDetailType instance
         */
        public static create(properties?: pok_deng_detail.IpokDengDetailType): pok_deng_detail.pokDengDetailType;

        /**
         * Encodes the specified pokDengDetailType message. Does not implicitly {@link pok_deng_detail.pokDengDetailType.verify|verify} messages.
         * @param message pokDengDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pok_deng_detail.IpokDengDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pokDengDetailType message, length delimited. Does not implicitly {@link pok_deng_detail.pokDengDetailType.verify|verify} messages.
         * @param message pokDengDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pok_deng_detail.IpokDengDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pokDengDetailType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pokDengDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pok_deng_detail.pokDengDetailType;

        /**
         * Decodes a pokDengDetailType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pokDengDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pok_deng_detail.pokDengDetailType;

        /**
         * Verifies a pokDengDetailType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pokDengDetailType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pokDengDetailType
         */
        public static fromObject(object: { [k: string]: any }): pok_deng_detail.pokDengDetailType;

        /**
         * Creates a plain object from a pokDengDetailType message. Also converts values to other types if specified.
         * @param message pokDengDetailType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pok_deng_detail.pokDengDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pokDengDetailType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a thai_pok_deng_detail. */
export class thai_pok_deng_detail implements Ithai_pok_deng_detail {

    /**
     * Constructs a new thai_pok_deng_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ithai_pok_deng_detail);

    /** thai_pok_deng_detail roleDetail. */
    public roleDetail: thai_pok_deng_detail.IthaiPokDengDetailType[];

    /**
     * Creates a new thai_pok_deng_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns thai_pok_deng_detail instance
     */
    public static create(properties?: Ithai_pok_deng_detail): thai_pok_deng_detail;

    /**
     * Encodes the specified thai_pok_deng_detail message. Does not implicitly {@link thai_pok_deng_detail.verify|verify} messages.
     * @param message thai_pok_deng_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ithai_pok_deng_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified thai_pok_deng_detail message, length delimited. Does not implicitly {@link thai_pok_deng_detail.verify|verify} messages.
     * @param message thai_pok_deng_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ithai_pok_deng_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a thai_pok_deng_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns thai_pok_deng_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): thai_pok_deng_detail;

    /**
     * Decodes a thai_pok_deng_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns thai_pok_deng_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): thai_pok_deng_detail;

    /**
     * Verifies a thai_pok_deng_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a thai_pok_deng_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns thai_pok_deng_detail
     */
    public static fromObject(object: { [k: string]: any }): thai_pok_deng_detail;

    /**
     * Creates a plain object from a thai_pok_deng_detail message. Also converts values to other types if specified.
     * @param message thai_pok_deng_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: thai_pok_deng_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this thai_pok_deng_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace thai_pok_deng_detail {

    /** Properties of a thaiPokDengDetailType. */
    interface IthaiPokDengDetailType {

        /** thaiPokDengDetailType isSelf */
        isSelf: boolean;

        /** thaiPokDengDetailType userName */
        userName: string;

        /** thaiPokDengDetailType isBanker */
        isBanker: boolean;

        /** thaiPokDengDetailType scrambleRound */
        scrambleRound: number;

        /** thaiPokDengDetailType betScores */
        betScores: (number|Long);

        /** thaiPokDengDetailType card */
        card?: (Icard_info[]|null);

        /** thaiPokDengDetailType cardType */
        cardType: number;

        /** thaiPokDengDetailType point */
        point: number;

        /** thaiPokDengDetailType winLose */
        winLose: (number|Long);

        /** thaiPokDengDetailType tax */
        tax: (number|Long);
    }

    /** Represents a thaiPokDengDetailType. */
    class thaiPokDengDetailType implements IthaiPokDengDetailType {

        /**
         * Constructs a new thaiPokDengDetailType.
         * @param [properties] Properties to set
         */
        constructor(properties?: thai_pok_deng_detail.IthaiPokDengDetailType);

        /** thaiPokDengDetailType isSelf. */
        public isSelf: boolean;

        /** thaiPokDengDetailType userName. */
        public userName: string;

        /** thaiPokDengDetailType isBanker. */
        public isBanker: boolean;

        /** thaiPokDengDetailType scrambleRound. */
        public scrambleRound: number;

        /** thaiPokDengDetailType betScores. */
        public betScores: (number|Long);

        /** thaiPokDengDetailType card. */
        public card: Icard_info[];

        /** thaiPokDengDetailType cardType. */
        public cardType: number;

        /** thaiPokDengDetailType point. */
        public point: number;

        /** thaiPokDengDetailType winLose. */
        public winLose: (number|Long);

        /** thaiPokDengDetailType tax. */
        public tax: (number|Long);

        /**
         * Creates a new thaiPokDengDetailType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns thaiPokDengDetailType instance
         */
        public static create(properties?: thai_pok_deng_detail.IthaiPokDengDetailType): thai_pok_deng_detail.thaiPokDengDetailType;

        /**
         * Encodes the specified thaiPokDengDetailType message. Does not implicitly {@link thai_pok_deng_detail.thaiPokDengDetailType.verify|verify} messages.
         * @param message thaiPokDengDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: thai_pok_deng_detail.IthaiPokDengDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified thaiPokDengDetailType message, length delimited. Does not implicitly {@link thai_pok_deng_detail.thaiPokDengDetailType.verify|verify} messages.
         * @param message thaiPokDengDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: thai_pok_deng_detail.IthaiPokDengDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a thaiPokDengDetailType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns thaiPokDengDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): thai_pok_deng_detail.thaiPokDengDetailType;

        /**
         * Decodes a thaiPokDengDetailType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns thaiPokDengDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): thai_pok_deng_detail.thaiPokDengDetailType;

        /**
         * Verifies a thaiPokDengDetailType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a thaiPokDengDetailType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns thaiPokDengDetailType
         */
        public static fromObject(object: { [k: string]: any }): thai_pok_deng_detail.thaiPokDengDetailType;

        /**
         * Creates a plain object from a thaiPokDengDetailType message. Also converts values to other types if specified.
         * @param message thaiPokDengDetailType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: thai_pok_deng_detail.thaiPokDengDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this thaiPokDengDetailType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a scratchcards2_detail. */
export class scratchcards2_detail implements Iscratchcards2_detail {

    /**
     * Constructs a new scratchcards2_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iscratchcards2_detail);

    /** scratchcards2_detail betType. */
    public betType: number;

    /** scratchcards2_detail cardInfo. */
    public cardInfo: scratchcards2_detail.Isc2_r_card_type[];

    /**
     * Creates a new scratchcards2_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns scratchcards2_detail instance
     */
    public static create(properties?: Iscratchcards2_detail): scratchcards2_detail;

    /**
     * Encodes the specified scratchcards2_detail message. Does not implicitly {@link scratchcards2_detail.verify|verify} messages.
     * @param message scratchcards2_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iscratchcards2_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified scratchcards2_detail message, length delimited. Does not implicitly {@link scratchcards2_detail.verify|verify} messages.
     * @param message scratchcards2_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iscratchcards2_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a scratchcards2_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns scratchcards2_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scratchcards2_detail;

    /**
     * Decodes a scratchcards2_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns scratchcards2_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scratchcards2_detail;

    /**
     * Verifies a scratchcards2_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a scratchcards2_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns scratchcards2_detail
     */
    public static fromObject(object: { [k: string]: any }): scratchcards2_detail;

    /**
     * Creates a plain object from a scratchcards2_detail message. Also converts values to other types if specified.
     * @param message scratchcards2_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: scratchcards2_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this scratchcards2_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace scratchcards2_detail {

    /** Properties of a sc2_r_card_type. */
    interface Isc2_r_card_type {

        /** sc2_r_card_type index */
        index: number;

        /** sc2_r_card_type cardBet */
        cardBet: (number|Long);

        /** sc2_r_card_type areaInfo */
        areaInfo?: (scratchcards2_detail.Isc2_r_area_type[]|null);
    }

    /** Represents a sc2_r_card_type. */
    class sc2_r_card_type implements Isc2_r_card_type {

        /**
         * Constructs a new sc2_r_card_type.
         * @param [properties] Properties to set
         */
        constructor(properties?: scratchcards2_detail.Isc2_r_card_type);

        /** sc2_r_card_type index. */
        public index: number;

        /** sc2_r_card_type cardBet. */
        public cardBet: (number|Long);

        /** sc2_r_card_type areaInfo. */
        public areaInfo: scratchcards2_detail.Isc2_r_area_type[];

        /**
         * Creates a new sc2_r_card_type instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sc2_r_card_type instance
         */
        public static create(properties?: scratchcards2_detail.Isc2_r_card_type): scratchcards2_detail.sc2_r_card_type;

        /**
         * Encodes the specified sc2_r_card_type message. Does not implicitly {@link scratchcards2_detail.sc2_r_card_type.verify|verify} messages.
         * @param message sc2_r_card_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scratchcards2_detail.Isc2_r_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sc2_r_card_type message, length delimited. Does not implicitly {@link scratchcards2_detail.sc2_r_card_type.verify|verify} messages.
         * @param message sc2_r_card_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scratchcards2_detail.Isc2_r_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sc2_r_card_type message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sc2_r_card_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scratchcards2_detail.sc2_r_card_type;

        /**
         * Decodes a sc2_r_card_type message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sc2_r_card_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scratchcards2_detail.sc2_r_card_type;

        /**
         * Verifies a sc2_r_card_type message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sc2_r_card_type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sc2_r_card_type
         */
        public static fromObject(object: { [k: string]: any }): scratchcards2_detail.sc2_r_card_type;

        /**
         * Creates a plain object from a sc2_r_card_type message. Also converts values to other types if specified.
         * @param message sc2_r_card_type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scratchcards2_detail.sc2_r_card_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sc2_r_card_type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a sc2_r_area_type. */
    interface Isc2_r_area_type {

        /** sc2_r_area_type index */
        index: number;

        /** sc2_r_area_type elementInfo */
        elementInfo?: (scratchcards2_detail.Isc2_r_element_type[]|null);

        /** sc2_r_area_type rewardRate */
        rewardRate: (number|Long);

        /** sc2_r_area_type isWin */
        isWin: boolean;
    }

    /** Represents a sc2_r_area_type. */
    class sc2_r_area_type implements Isc2_r_area_type {

        /**
         * Constructs a new sc2_r_area_type.
         * @param [properties] Properties to set
         */
        constructor(properties?: scratchcards2_detail.Isc2_r_area_type);

        /** sc2_r_area_type index. */
        public index: number;

        /** sc2_r_area_type elementInfo. */
        public elementInfo: scratchcards2_detail.Isc2_r_element_type[];

        /** sc2_r_area_type rewardRate. */
        public rewardRate: (number|Long);

        /** sc2_r_area_type isWin. */
        public isWin: boolean;

        /**
         * Creates a new sc2_r_area_type instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sc2_r_area_type instance
         */
        public static create(properties?: scratchcards2_detail.Isc2_r_area_type): scratchcards2_detail.sc2_r_area_type;

        /**
         * Encodes the specified sc2_r_area_type message. Does not implicitly {@link scratchcards2_detail.sc2_r_area_type.verify|verify} messages.
         * @param message sc2_r_area_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scratchcards2_detail.Isc2_r_area_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sc2_r_area_type message, length delimited. Does not implicitly {@link scratchcards2_detail.sc2_r_area_type.verify|verify} messages.
         * @param message sc2_r_area_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scratchcards2_detail.Isc2_r_area_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sc2_r_area_type message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sc2_r_area_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scratchcards2_detail.sc2_r_area_type;

        /**
         * Decodes a sc2_r_area_type message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sc2_r_area_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scratchcards2_detail.sc2_r_area_type;

        /**
         * Verifies a sc2_r_area_type message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sc2_r_area_type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sc2_r_area_type
         */
        public static fromObject(object: { [k: string]: any }): scratchcards2_detail.sc2_r_area_type;

        /**
         * Creates a plain object from a sc2_r_area_type message. Also converts values to other types if specified.
         * @param message sc2_r_area_type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scratchcards2_detail.sc2_r_area_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sc2_r_area_type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a sc2_r_element_type. */
    interface Isc2_r_element_type {

        /** sc2_r_element_type element */
        element: number;

        /** sc2_r_element_type isWin */
        isWin: boolean;
    }

    /** Represents a sc2_r_element_type. */
    class sc2_r_element_type implements Isc2_r_element_type {

        /**
         * Constructs a new sc2_r_element_type.
         * @param [properties] Properties to set
         */
        constructor(properties?: scratchcards2_detail.Isc2_r_element_type);

        /** sc2_r_element_type element. */
        public element: number;

        /** sc2_r_element_type isWin. */
        public isWin: boolean;

        /**
         * Creates a new sc2_r_element_type instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sc2_r_element_type instance
         */
        public static create(properties?: scratchcards2_detail.Isc2_r_element_type): scratchcards2_detail.sc2_r_element_type;

        /**
         * Encodes the specified sc2_r_element_type message. Does not implicitly {@link scratchcards2_detail.sc2_r_element_type.verify|verify} messages.
         * @param message sc2_r_element_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: scratchcards2_detail.Isc2_r_element_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sc2_r_element_type message, length delimited. Does not implicitly {@link scratchcards2_detail.sc2_r_element_type.verify|verify} messages.
         * @param message sc2_r_element_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: scratchcards2_detail.Isc2_r_element_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sc2_r_element_type message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sc2_r_element_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scratchcards2_detail.sc2_r_element_type;

        /**
         * Decodes a sc2_r_element_type message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sc2_r_element_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scratchcards2_detail.sc2_r_element_type;

        /**
         * Verifies a sc2_r_element_type message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sc2_r_element_type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sc2_r_element_type
         */
        public static fromObject(object: { [k: string]: any }): scratchcards2_detail.sc2_r_element_type;

        /**
         * Creates a plain object from a sc2_r_element_type message. Also converts values to other types if specified.
         * @param message sc2_r_element_type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: scratchcards2_detail.sc2_r_element_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sc2_r_element_type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a route_detail. */
export class route_detail implements Iroute_detail {

    /**
     * Constructs a new route_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iroute_detail);

    /** route_detail grids. */
    public grids: Iroute_grid_type[];

    /** route_detail route. */
    public route: Iroute_type[];

    /**
     * Creates a new route_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns route_detail instance
     */
    public static create(properties?: Iroute_detail): route_detail;

    /**
     * Encodes the specified route_detail message. Does not implicitly {@link route_detail.verify|verify} messages.
     * @param message route_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iroute_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified route_detail message, length delimited. Does not implicitly {@link route_detail.verify|verify} messages.
     * @param message route_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iroute_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a route_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns route_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): route_detail;

    /**
     * Decodes a route_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns route_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): route_detail;

    /**
     * Verifies a route_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a route_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns route_detail
     */
    public static fromObject(object: { [k: string]: any }): route_detail;

    /**
     * Creates a plain object from a route_detail message. Also converts values to other types if specified.
     * @param message route_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: route_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this route_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a route_grid_type. */
export class route_grid_type implements Iroute_grid_type {

    /**
     * Constructs a new route_grid_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iroute_grid_type);

    /** route_grid_type rowId. */
    public rowId: number;

    /** route_grid_type columnId. */
    public columnId: number;

    /** route_grid_type gridId. */
    public gridId: number;

    /** route_grid_type element. */
    public element: number;

    /**
     * Creates a new route_grid_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns route_grid_type instance
     */
    public static create(properties?: Iroute_grid_type): route_grid_type;

    /**
     * Encodes the specified route_grid_type message. Does not implicitly {@link route_grid_type.verify|verify} messages.
     * @param message route_grid_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iroute_grid_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified route_grid_type message, length delimited. Does not implicitly {@link route_grid_type.verify|verify} messages.
     * @param message route_grid_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iroute_grid_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a route_grid_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns route_grid_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): route_grid_type;

    /**
     * Decodes a route_grid_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns route_grid_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): route_grid_type;

    /**
     * Verifies a route_grid_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a route_grid_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns route_grid_type
     */
    public static fromObject(object: { [k: string]: any }): route_grid_type;

    /**
     * Creates a plain object from a route_grid_type message. Also converts values to other types if specified.
     * @param message route_grid_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: route_grid_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this route_grid_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a route_type. */
export class route_type implements Iroute_type {

    /**
     * Constructs a new route_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iroute_type);

    /** route_type startId. */
    public startId: number;

    /** route_type routeGrid. */
    public routeGrid: number[];

    /** route_type stepCount. */
    public stepCount: number;

    /** route_type betScores. */
    public betScores: (number|Long);

    /** route_type odds. */
    public odds: number;

    /** route_type winScores. */
    public winScores: (number|Long);

    /** route_type profit. */
    public profit: (number|Long);

    /**
     * Creates a new route_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns route_type instance
     */
    public static create(properties?: Iroute_type): route_type;

    /**
     * Encodes the specified route_type message. Does not implicitly {@link route_type.verify|verify} messages.
     * @param message route_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iroute_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified route_type message, length delimited. Does not implicitly {@link route_type.verify|verify} messages.
     * @param message route_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iroute_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a route_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns route_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): route_type;

    /**
     * Decodes a route_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns route_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): route_type;

    /**
     * Verifies a route_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a route_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns route_type
     */
    public static fromObject(object: { [k: string]: any }): route_type;

    /**
     * Creates a plain object from a route_type message. Also converts values to other types if specified.
     * @param message route_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: route_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this route_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a red_packet_detail. */
export class red_packet_detail implements Ired_packet_detail {

    /**
     * Constructs a new red_packet_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ired_packet_detail);

    /** red_packet_detail playType. */
    public playType: number;

    /**
     * Creates a new red_packet_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns red_packet_detail instance
     */
    public static create(properties?: Ired_packet_detail): red_packet_detail;

    /**
     * Encodes the specified red_packet_detail message. Does not implicitly {@link red_packet_detail.verify|verify} messages.
     * @param message red_packet_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ired_packet_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified red_packet_detail message, length delimited. Does not implicitly {@link red_packet_detail.verify|verify} messages.
     * @param message red_packet_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ired_packet_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a red_packet_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns red_packet_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): red_packet_detail;

    /**
     * Decodes a red_packet_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns red_packet_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): red_packet_detail;

    /**
     * Verifies a red_packet_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a red_packet_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns red_packet_detail
     */
    public static fromObject(object: { [k: string]: any }): red_packet_detail;

    /**
     * Creates a plain object from a red_packet_detail message. Also converts values to other types if specified.
     * @param message red_packet_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: red_packet_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this red_packet_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a seotda_detail. */
export class seotda_detail implements Iseotda_detail {

    /**
     * Constructs a new seotda_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iseotda_detail);

    /** seotda_detail roleDetail. */
    public roleDetail: seotda_detail.IseotdaDetailType[];

    /**
     * Creates a new seotda_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns seotda_detail instance
     */
    public static create(properties?: Iseotda_detail): seotda_detail;

    /**
     * Encodes the specified seotda_detail message. Does not implicitly {@link seotda_detail.verify|verify} messages.
     * @param message seotda_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iseotda_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified seotda_detail message, length delimited. Does not implicitly {@link seotda_detail.verify|verify} messages.
     * @param message seotda_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iseotda_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a seotda_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns seotda_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): seotda_detail;

    /**
     * Decodes a seotda_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns seotda_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): seotda_detail;

    /**
     * Verifies a seotda_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a seotda_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns seotda_detail
     */
    public static fromObject(object: { [k: string]: any }): seotda_detail;

    /**
     * Creates a plain object from a seotda_detail message. Also converts values to other types if specified.
     * @param message seotda_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: seotda_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this seotda_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace seotda_detail {

    /** Properties of a seotdaDetailType. */
    interface IseotdaDetailType {

        /** seotdaDetailType isSelf */
        isSelf: boolean;

        /** seotdaDetailType userName */
        userName: string;

        /** seotdaDetailType isFold */
        isFold: boolean;

        /** seotdaDetailType isVs */
        isVs: boolean;

        /** seotdaDetailType betScores */
        betScores: (number|Long);

        /** seotdaDetailType normalCard */
        normalCard: seotda_detail.IseotdaCardSuite;

        /** seotdaDetailType compareCard */
        compareCard?: (seotda_detail.IseotdaCardSuite|null);

        /** seotdaDetailType winLose */
        winLose: (number|Long);
    }

    /** Represents a seotdaDetailType. */
    class seotdaDetailType implements IseotdaDetailType {

        /**
         * Constructs a new seotdaDetailType.
         * @param [properties] Properties to set
         */
        constructor(properties?: seotda_detail.IseotdaDetailType);

        /** seotdaDetailType isSelf. */
        public isSelf: boolean;

        /** seotdaDetailType userName. */
        public userName: string;

        /** seotdaDetailType isFold. */
        public isFold: boolean;

        /** seotdaDetailType isVs. */
        public isVs: boolean;

        /** seotdaDetailType betScores. */
        public betScores: (number|Long);

        /** seotdaDetailType normalCard. */
        public normalCard: seotda_detail.IseotdaCardSuite;

        /** seotdaDetailType compareCard. */
        public compareCard?: (seotda_detail.IseotdaCardSuite|null);

        /** seotdaDetailType winLose. */
        public winLose: (number|Long);

        /**
         * Creates a new seotdaDetailType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns seotdaDetailType instance
         */
        public static create(properties?: seotda_detail.IseotdaDetailType): seotda_detail.seotdaDetailType;

        /**
         * Encodes the specified seotdaDetailType message. Does not implicitly {@link seotda_detail.seotdaDetailType.verify|verify} messages.
         * @param message seotdaDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: seotda_detail.IseotdaDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified seotdaDetailType message, length delimited. Does not implicitly {@link seotda_detail.seotdaDetailType.verify|verify} messages.
         * @param message seotdaDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: seotda_detail.IseotdaDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a seotdaDetailType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns seotdaDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): seotda_detail.seotdaDetailType;

        /**
         * Decodes a seotdaDetailType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns seotdaDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): seotda_detail.seotdaDetailType;

        /**
         * Verifies a seotdaDetailType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a seotdaDetailType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns seotdaDetailType
         */
        public static fromObject(object: { [k: string]: any }): seotda_detail.seotdaDetailType;

        /**
         * Creates a plain object from a seotdaDetailType message. Also converts values to other types if specified.
         * @param message seotdaDetailType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: seotda_detail.seotdaDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this seotdaDetailType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a seotdaCardSuite. */
    interface IseotdaCardSuite {

        /** seotdaCardSuite cardInfo */
        cardInfo?: (Icard_info[]|null);

        /** seotdaCardSuite cardType */
        cardType: number;
    }

    /** Represents a seotdaCardSuite. */
    class seotdaCardSuite implements IseotdaCardSuite {

        /**
         * Constructs a new seotdaCardSuite.
         * @param [properties] Properties to set
         */
        constructor(properties?: seotda_detail.IseotdaCardSuite);

        /** seotdaCardSuite cardInfo. */
        public cardInfo: Icard_info[];

        /** seotdaCardSuite cardType. */
        public cardType: number;

        /**
         * Creates a new seotdaCardSuite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns seotdaCardSuite instance
         */
        public static create(properties?: seotda_detail.IseotdaCardSuite): seotda_detail.seotdaCardSuite;

        /**
         * Encodes the specified seotdaCardSuite message. Does not implicitly {@link seotda_detail.seotdaCardSuite.verify|verify} messages.
         * @param message seotdaCardSuite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: seotda_detail.IseotdaCardSuite, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified seotdaCardSuite message, length delimited. Does not implicitly {@link seotda_detail.seotdaCardSuite.verify|verify} messages.
         * @param message seotdaCardSuite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: seotda_detail.IseotdaCardSuite, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a seotdaCardSuite message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns seotdaCardSuite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): seotda_detail.seotdaCardSuite;

        /**
         * Decodes a seotdaCardSuite message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns seotdaCardSuite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): seotda_detail.seotdaCardSuite;

        /**
         * Verifies a seotdaCardSuite message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a seotdaCardSuite message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns seotdaCardSuite
         */
        public static fromObject(object: { [k: string]: any }): seotda_detail.seotdaCardSuite;

        /**
         * Creates a plain object from a seotdaCardSuite message. Also converts values to other types if specified.
         * @param message seotdaCardSuite
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: seotda_detail.seotdaCardSuite, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this seotdaCardSuite to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a mahjong_detail. */
export class mahjong_detail implements Imahjong_detail {

    /**
     * Constructs a new mahjong_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Imahjong_detail);

    /** mahjong_detail pos. */
    public pos: number;

    /** mahjong_detail lackColor. */
    public lackColor: number;

    /** mahjong_detail cardInfo. */
    public cardInfo: Icard_info[];

    /** mahjong_detail gangCombineInfo. */
    public gangCombineInfo: mahjong_detail.Imahjong_combine_type[];

    /** mahjong_detail huCardInfo. */
    public huCardInfo: Icard_info[];

    /** mahjong_detail settle. */
    public settle: mahjong_detail.Imahjong_settle_type[];

    /** mahjong_detail totalWinLose. */
    public totalWinLose: (number|Long);

    /**
     * Creates a new mahjong_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns mahjong_detail instance
     */
    public static create(properties?: Imahjong_detail): mahjong_detail;

    /**
     * Encodes the specified mahjong_detail message. Does not implicitly {@link mahjong_detail.verify|verify} messages.
     * @param message mahjong_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Imahjong_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified mahjong_detail message, length delimited. Does not implicitly {@link mahjong_detail.verify|verify} messages.
     * @param message mahjong_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Imahjong_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a mahjong_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns mahjong_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_detail;

    /**
     * Decodes a mahjong_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns mahjong_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_detail;

    /**
     * Verifies a mahjong_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a mahjong_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns mahjong_detail
     */
    public static fromObject(object: { [k: string]: any }): mahjong_detail;

    /**
     * Creates a plain object from a mahjong_detail message. Also converts values to other types if specified.
     * @param message mahjong_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: mahjong_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this mahjong_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace mahjong_detail {

    /** Properties of a mahjong_combine_type. */
    interface Imahjong_combine_type {

        /** mahjong_combine_type type */
        type: number;

        /** mahjong_combine_type subType */
        subType: number;

        /** mahjong_combine_type card */
        card?: (Icard_info[]|null);
    }

    /** Represents a mahjong_combine_type. */
    class mahjong_combine_type implements Imahjong_combine_type {

        /**
         * Constructs a new mahjong_combine_type.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong_detail.Imahjong_combine_type);

        /** mahjong_combine_type type. */
        public type: number;

        /** mahjong_combine_type subType. */
        public subType: number;

        /** mahjong_combine_type card. */
        public card: Icard_info[];

        /**
         * Creates a new mahjong_combine_type instance using the specified properties.
         * @param [properties] Properties to set
         * @returns mahjong_combine_type instance
         */
        public static create(properties?: mahjong_detail.Imahjong_combine_type): mahjong_detail.mahjong_combine_type;

        /**
         * Encodes the specified mahjong_combine_type message. Does not implicitly {@link mahjong_detail.mahjong_combine_type.verify|verify} messages.
         * @param message mahjong_combine_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong_detail.Imahjong_combine_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified mahjong_combine_type message, length delimited. Does not implicitly {@link mahjong_detail.mahjong_combine_type.verify|verify} messages.
         * @param message mahjong_combine_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong_detail.Imahjong_combine_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a mahjong_combine_type message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns mahjong_combine_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_detail.mahjong_combine_type;

        /**
         * Decodes a mahjong_combine_type message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns mahjong_combine_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_detail.mahjong_combine_type;

        /**
         * Verifies a mahjong_combine_type message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a mahjong_combine_type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns mahjong_combine_type
         */
        public static fromObject(object: { [k: string]: any }): mahjong_detail.mahjong_combine_type;

        /**
         * Creates a plain object from a mahjong_combine_type message. Also converts values to other types if specified.
         * @param message mahjong_combine_type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong_detail.mahjong_combine_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this mahjong_combine_type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a mahjong_settle_type. */
    interface Imahjong_settle_type {

        /** mahjong_settle_type type */
        type: number;

        /** mahjong_settle_type isSelfSettle */
        isSelfSettle: boolean;

        /** mahjong_settle_type settlePos */
        settlePos: number;

        /** mahjong_settle_type settledPos */
        settledPos?: (number[]|null);

        /** mahjong_settle_type isSelf */
        isSelf: boolean;

        /** mahjong_settle_type cardTypeList */
        cardTypeList?: (mahjong_detail.Imahjong_card_type_multi_type[]|null);

        /** mahjong_settle_type multi */
        multi: number;

        /** mahjong_settle_type winLose */
        winLose: (number|Long);
    }

    /** Represents a mahjong_settle_type. */
    class mahjong_settle_type implements Imahjong_settle_type {

        /**
         * Constructs a new mahjong_settle_type.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong_detail.Imahjong_settle_type);

        /** mahjong_settle_type type. */
        public type: number;

        /** mahjong_settle_type isSelfSettle. */
        public isSelfSettle: boolean;

        /** mahjong_settle_type settlePos. */
        public settlePos: number;

        /** mahjong_settle_type settledPos. */
        public settledPos: number[];

        /** mahjong_settle_type isSelf. */
        public isSelf: boolean;

        /** mahjong_settle_type cardTypeList. */
        public cardTypeList: mahjong_detail.Imahjong_card_type_multi_type[];

        /** mahjong_settle_type multi. */
        public multi: number;

        /** mahjong_settle_type winLose. */
        public winLose: (number|Long);

        /**
         * Creates a new mahjong_settle_type instance using the specified properties.
         * @param [properties] Properties to set
         * @returns mahjong_settle_type instance
         */
        public static create(properties?: mahjong_detail.Imahjong_settle_type): mahjong_detail.mahjong_settle_type;

        /**
         * Encodes the specified mahjong_settle_type message. Does not implicitly {@link mahjong_detail.mahjong_settle_type.verify|verify} messages.
         * @param message mahjong_settle_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong_detail.Imahjong_settle_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified mahjong_settle_type message, length delimited. Does not implicitly {@link mahjong_detail.mahjong_settle_type.verify|verify} messages.
         * @param message mahjong_settle_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong_detail.Imahjong_settle_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a mahjong_settle_type message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns mahjong_settle_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_detail.mahjong_settle_type;

        /**
         * Decodes a mahjong_settle_type message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns mahjong_settle_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_detail.mahjong_settle_type;

        /**
         * Verifies a mahjong_settle_type message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a mahjong_settle_type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns mahjong_settle_type
         */
        public static fromObject(object: { [k: string]: any }): mahjong_detail.mahjong_settle_type;

        /**
         * Creates a plain object from a mahjong_settle_type message. Also converts values to other types if specified.
         * @param message mahjong_settle_type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong_detail.mahjong_settle_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this mahjong_settle_type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a mahjong_card_type_multi_type. */
    interface Imahjong_card_type_multi_type {

        /** mahjong_card_type_multi_type cardType */
        cardType: number;

        /** mahjong_card_type_multi_type multi */
        multi: number;
    }

    /** Represents a mahjong_card_type_multi_type. */
    class mahjong_card_type_multi_type implements Imahjong_card_type_multi_type {

        /**
         * Constructs a new mahjong_card_type_multi_type.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong_detail.Imahjong_card_type_multi_type);

        /** mahjong_card_type_multi_type cardType. */
        public cardType: number;

        /** mahjong_card_type_multi_type multi. */
        public multi: number;

        /**
         * Creates a new mahjong_card_type_multi_type instance using the specified properties.
         * @param [properties] Properties to set
         * @returns mahjong_card_type_multi_type instance
         */
        public static create(properties?: mahjong_detail.Imahjong_card_type_multi_type): mahjong_detail.mahjong_card_type_multi_type;

        /**
         * Encodes the specified mahjong_card_type_multi_type message. Does not implicitly {@link mahjong_detail.mahjong_card_type_multi_type.verify|verify} messages.
         * @param message mahjong_card_type_multi_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong_detail.Imahjong_card_type_multi_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified mahjong_card_type_multi_type message, length delimited. Does not implicitly {@link mahjong_detail.mahjong_card_type_multi_type.verify|verify} messages.
         * @param message mahjong_card_type_multi_type message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong_detail.Imahjong_card_type_multi_type, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a mahjong_card_type_multi_type message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns mahjong_card_type_multi_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong_detail.mahjong_card_type_multi_type;

        /**
         * Decodes a mahjong_card_type_multi_type message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns mahjong_card_type_multi_type
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong_detail.mahjong_card_type_multi_type;

        /**
         * Verifies a mahjong_card_type_multi_type message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a mahjong_card_type_multi_type message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns mahjong_card_type_multi_type
         */
        public static fromObject(object: { [k: string]: any }): mahjong_detail.mahjong_card_type_multi_type;

        /**
         * Creates a plain object from a mahjong_card_type_multi_type message. Also converts values to other types if specified.
         * @param message mahjong_card_type_multi_type
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong_detail.mahjong_card_type_multi_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this mahjong_card_type_multi_type to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a soha_detail. */
export class soha_detail implements Isoha_detail {

    /**
     * Constructs a new soha_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Isoha_detail);

    /** soha_detail roleDetail. */
    public roleDetail: soha_detail.IsohaDetailType[];

    /**
     * Creates a new soha_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns soha_detail instance
     */
    public static create(properties?: Isoha_detail): soha_detail;

    /**
     * Encodes the specified soha_detail message. Does not implicitly {@link soha_detail.verify|verify} messages.
     * @param message soha_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Isoha_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified soha_detail message, length delimited. Does not implicitly {@link soha_detail.verify|verify} messages.
     * @param message soha_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Isoha_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a soha_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns soha_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soha_detail;

    /**
     * Decodes a soha_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns soha_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soha_detail;

    /**
     * Verifies a soha_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a soha_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns soha_detail
     */
    public static fromObject(object: { [k: string]: any }): soha_detail;

    /**
     * Creates a plain object from a soha_detail message. Also converts values to other types if specified.
     * @param message soha_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: soha_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this soha_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace soha_detail {

    /** Properties of a sohaDetailType. */
    interface IsohaDetailType {

        /** sohaDetailType pos */
        pos: number;

        /** sohaDetailType userName */
        userName: string;

        /** sohaDetailType isFold */
        isFold: boolean;

        /** sohaDetailType betScores */
        betScores: (number|Long);

        /** sohaDetailType cards */
        cards?: (Icard_info[]|null);

        /** sohaDetailType cardType */
        cardType: number;

        /** sohaDetailType profit */
        profit: (number|Long);
    }

    /** Represents a sohaDetailType. */
    class sohaDetailType implements IsohaDetailType {

        /**
         * Constructs a new sohaDetailType.
         * @param [properties] Properties to set
         */
        constructor(properties?: soha_detail.IsohaDetailType);

        /** sohaDetailType pos. */
        public pos: number;

        /** sohaDetailType userName. */
        public userName: string;

        /** sohaDetailType isFold. */
        public isFold: boolean;

        /** sohaDetailType betScores. */
        public betScores: (number|Long);

        /** sohaDetailType cards. */
        public cards: Icard_info[];

        /** sohaDetailType cardType. */
        public cardType: number;

        /** sohaDetailType profit. */
        public profit: (number|Long);

        /**
         * Creates a new sohaDetailType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sohaDetailType instance
         */
        public static create(properties?: soha_detail.IsohaDetailType): soha_detail.sohaDetailType;

        /**
         * Encodes the specified sohaDetailType message. Does not implicitly {@link soha_detail.sohaDetailType.verify|verify} messages.
         * @param message sohaDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: soha_detail.IsohaDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sohaDetailType message, length delimited. Does not implicitly {@link soha_detail.sohaDetailType.verify|verify} messages.
         * @param message sohaDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: soha_detail.IsohaDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sohaDetailType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sohaDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): soha_detail.sohaDetailType;

        /**
         * Decodes a sohaDetailType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sohaDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): soha_detail.sohaDetailType;

        /**
         * Verifies a sohaDetailType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sohaDetailType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sohaDetailType
         */
        public static fromObject(object: { [k: string]: any }): soha_detail.sohaDetailType;

        /**
         * Creates a plain object from a sohaDetailType message. Also converts values to other types if specified.
         * @param message sohaDetailType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: soha_detail.sohaDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sohaDetailType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a landlord_detail. */
export class landlord_detail implements Ilandlord_detail {

    /**
     * Constructs a new landlord_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilandlord_detail);

    /** landlord_detail double. */
    public double: number;

    /** landlord_detail isKtBoom. */
    public isKtBoom: boolean;

    /** landlord_detail isSpring. */
    public isSpring: boolean;

    /** landlord_detail winRoleType. */
    public winRoleType: number;

    /** landlord_detail roleDetail. */
    public roleDetail: landlord_detail.IlandlordDetailType[];

    /**
     * Creates a new landlord_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns landlord_detail instance
     */
    public static create(properties?: Ilandlord_detail): landlord_detail;

    /**
     * Encodes the specified landlord_detail message. Does not implicitly {@link landlord_detail.verify|verify} messages.
     * @param message landlord_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilandlord_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified landlord_detail message, length delimited. Does not implicitly {@link landlord_detail.verify|verify} messages.
     * @param message landlord_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilandlord_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a landlord_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns landlord_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landlord_detail;

    /**
     * Decodes a landlord_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns landlord_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landlord_detail;

    /**
     * Verifies a landlord_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a landlord_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns landlord_detail
     */
    public static fromObject(object: { [k: string]: any }): landlord_detail;

    /**
     * Creates a plain object from a landlord_detail message. Also converts values to other types if specified.
     * @param message landlord_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: landlord_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this landlord_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace landlord_detail {

    /** Properties of a landlordDetailType. */
    interface IlandlordDetailType {

        /** landlordDetailType pos */
        pos: number;

        /** landlordDetailType roleType */
        roleType: number;

        /** landlordDetailType restCard */
        restCard?: (number[]|null);

        /** landlordDetailType profit */
        profit: (number|Long);
    }

    /** Represents a landlordDetailType. */
    class landlordDetailType implements IlandlordDetailType {

        /**
         * Constructs a new landlordDetailType.
         * @param [properties] Properties to set
         */
        constructor(properties?: landlord_detail.IlandlordDetailType);

        /** landlordDetailType pos. */
        public pos: number;

        /** landlordDetailType roleType. */
        public roleType: number;

        /** landlordDetailType restCard. */
        public restCard: number[];

        /** landlordDetailType profit. */
        public profit: (number|Long);

        /**
         * Creates a new landlordDetailType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns landlordDetailType instance
         */
        public static create(properties?: landlord_detail.IlandlordDetailType): landlord_detail.landlordDetailType;

        /**
         * Encodes the specified landlordDetailType message. Does not implicitly {@link landlord_detail.landlordDetailType.verify|verify} messages.
         * @param message landlordDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landlord_detail.IlandlordDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified landlordDetailType message, length delimited. Does not implicitly {@link landlord_detail.landlordDetailType.verify|verify} messages.
         * @param message landlordDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landlord_detail.IlandlordDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a landlordDetailType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns landlordDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landlord_detail.landlordDetailType;

        /**
         * Decodes a landlordDetailType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns landlordDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landlord_detail.landlordDetailType;

        /**
         * Verifies a landlordDetailType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a landlordDetailType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns landlordDetailType
         */
        public static fromObject(object: { [k: string]: any }): landlord_detail.landlordDetailType;

        /**
         * Creates a plain object from a landlordDetailType message. Also converts values to other types if specified.
         * @param message landlordDetailType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landlord_detail.landlordDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this landlordDetailType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a ludo_quick_detail. */
export class ludo_quick_detail implements Iludo_quick_detail {

    /**
     * Constructs a new ludo_quick_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iludo_quick_detail);

    /** ludo_quick_detail winPos. */
    public winPos: number;

    /** ludo_quick_detail winColor. */
    public winColor: number;

    /** ludo_quick_detail rolePiece. */
    public rolePiece: ludo_quick_detail.IludoQuickRolePieceType[];

    /** ludo_quick_detail roleColor. */
    public roleColor: ludo_quick_detail.IludoQuickRoleColorType[];

    /** ludo_quick_detail roleDetail. */
    public roleDetail: ludo_quick_detail.IludoQuickDetailType[];

    /**
     * Creates a new ludo_quick_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ludo_quick_detail instance
     */
    public static create(properties?: Iludo_quick_detail): ludo_quick_detail;

    /**
     * Encodes the specified ludo_quick_detail message. Does not implicitly {@link ludo_quick_detail.verify|verify} messages.
     * @param message ludo_quick_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iludo_quick_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ludo_quick_detail message, length delimited. Does not implicitly {@link ludo_quick_detail.verify|verify} messages.
     * @param message ludo_quick_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iludo_quick_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ludo_quick_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ludo_quick_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ludo_quick_detail;

    /**
     * Decodes a ludo_quick_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ludo_quick_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ludo_quick_detail;

    /**
     * Verifies a ludo_quick_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ludo_quick_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ludo_quick_detail
     */
    public static fromObject(object: { [k: string]: any }): ludo_quick_detail;

    /**
     * Creates a plain object from a ludo_quick_detail message. Also converts values to other types if specified.
     * @param message ludo_quick_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ludo_quick_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ludo_quick_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ludo_quick_detail {

    /** Properties of a ludoQuickRolePieceType. */
    interface IludoQuickRolePieceType {

        /** ludoQuickRolePieceType pos */
        pos: number;

        /** ludoQuickRolePieceType pieceList */
        pieceList?: (ludo_quick_detail.ludoQuickRolePieceType.IludoQuickPieceType[]|null);
    }

    /** Represents a ludoQuickRolePieceType. */
    class ludoQuickRolePieceType implements IludoQuickRolePieceType {

        /**
         * Constructs a new ludoQuickRolePieceType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ludo_quick_detail.IludoQuickRolePieceType);

        /** ludoQuickRolePieceType pos. */
        public pos: number;

        /** ludoQuickRolePieceType pieceList. */
        public pieceList: ludo_quick_detail.ludoQuickRolePieceType.IludoQuickPieceType[];

        /**
         * Creates a new ludoQuickRolePieceType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ludoQuickRolePieceType instance
         */
        public static create(properties?: ludo_quick_detail.IludoQuickRolePieceType): ludo_quick_detail.ludoQuickRolePieceType;

        /**
         * Encodes the specified ludoQuickRolePieceType message. Does not implicitly {@link ludo_quick_detail.ludoQuickRolePieceType.verify|verify} messages.
         * @param message ludoQuickRolePieceType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ludo_quick_detail.IludoQuickRolePieceType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ludoQuickRolePieceType message, length delimited. Does not implicitly {@link ludo_quick_detail.ludoQuickRolePieceType.verify|verify} messages.
         * @param message ludoQuickRolePieceType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ludo_quick_detail.IludoQuickRolePieceType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ludoQuickRolePieceType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ludoQuickRolePieceType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ludo_quick_detail.ludoQuickRolePieceType;

        /**
         * Decodes a ludoQuickRolePieceType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ludoQuickRolePieceType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ludo_quick_detail.ludoQuickRolePieceType;

        /**
         * Verifies a ludoQuickRolePieceType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ludoQuickRolePieceType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ludoQuickRolePieceType
         */
        public static fromObject(object: { [k: string]: any }): ludo_quick_detail.ludoQuickRolePieceType;

        /**
         * Creates a plain object from a ludoQuickRolePieceType message. Also converts values to other types if specified.
         * @param message ludoQuickRolePieceType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ludo_quick_detail.ludoQuickRolePieceType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ludoQuickRolePieceType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ludoQuickRolePieceType {

        /** Properties of a ludoQuickPieceType. */
        interface IludoQuickPieceType {

            /** ludoQuickPieceType idx */
            idx: number;

            /** ludoQuickPieceType pos */
            pos: number;

            /** ludoQuickPieceType purseNum */
            purseNum: number;
        }

        /** Represents a ludoQuickPieceType. */
        class ludoQuickPieceType implements IludoQuickPieceType {

            /**
             * Constructs a new ludoQuickPieceType.
             * @param [properties] Properties to set
             */
            constructor(properties?: ludo_quick_detail.ludoQuickRolePieceType.IludoQuickPieceType);

            /** ludoQuickPieceType idx. */
            public idx: number;

            /** ludoQuickPieceType pos. */
            public pos: number;

            /** ludoQuickPieceType purseNum. */
            public purseNum: number;

            /**
             * Creates a new ludoQuickPieceType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ludoQuickPieceType instance
             */
            public static create(properties?: ludo_quick_detail.ludoQuickRolePieceType.IludoQuickPieceType): ludo_quick_detail.ludoQuickRolePieceType.ludoQuickPieceType;

            /**
             * Encodes the specified ludoQuickPieceType message. Does not implicitly {@link ludo_quick_detail.ludoQuickRolePieceType.ludoQuickPieceType.verify|verify} messages.
             * @param message ludoQuickPieceType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ludo_quick_detail.ludoQuickRolePieceType.IludoQuickPieceType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ludoQuickPieceType message, length delimited. Does not implicitly {@link ludo_quick_detail.ludoQuickRolePieceType.ludoQuickPieceType.verify|verify} messages.
             * @param message ludoQuickPieceType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ludo_quick_detail.ludoQuickRolePieceType.IludoQuickPieceType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ludoQuickPieceType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ludoQuickPieceType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ludo_quick_detail.ludoQuickRolePieceType.ludoQuickPieceType;

            /**
             * Decodes a ludoQuickPieceType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ludoQuickPieceType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ludo_quick_detail.ludoQuickRolePieceType.ludoQuickPieceType;

            /**
             * Verifies a ludoQuickPieceType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ludoQuickPieceType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ludoQuickPieceType
             */
            public static fromObject(object: { [k: string]: any }): ludo_quick_detail.ludoQuickRolePieceType.ludoQuickPieceType;

            /**
             * Creates a plain object from a ludoQuickPieceType message. Also converts values to other types if specified.
             * @param message ludoQuickPieceType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ludo_quick_detail.ludoQuickRolePieceType.ludoQuickPieceType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ludoQuickPieceType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ludoQuickRoleColorType. */
    interface IludoQuickRoleColorType {

        /** ludoQuickRoleColorType pos */
        pos: number;

        /** ludoQuickRoleColorType color */
        color: number;
    }

    /** Represents a ludoQuickRoleColorType. */
    class ludoQuickRoleColorType implements IludoQuickRoleColorType {

        /**
         * Constructs a new ludoQuickRoleColorType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ludo_quick_detail.IludoQuickRoleColorType);

        /** ludoQuickRoleColorType pos. */
        public pos: number;

        /** ludoQuickRoleColorType color. */
        public color: number;

        /**
         * Creates a new ludoQuickRoleColorType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ludoQuickRoleColorType instance
         */
        public static create(properties?: ludo_quick_detail.IludoQuickRoleColorType): ludo_quick_detail.ludoQuickRoleColorType;

        /**
         * Encodes the specified ludoQuickRoleColorType message. Does not implicitly {@link ludo_quick_detail.ludoQuickRoleColorType.verify|verify} messages.
         * @param message ludoQuickRoleColorType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ludo_quick_detail.IludoQuickRoleColorType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ludoQuickRoleColorType message, length delimited. Does not implicitly {@link ludo_quick_detail.ludoQuickRoleColorType.verify|verify} messages.
         * @param message ludoQuickRoleColorType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ludo_quick_detail.IludoQuickRoleColorType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ludoQuickRoleColorType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ludoQuickRoleColorType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ludo_quick_detail.ludoQuickRoleColorType;

        /**
         * Decodes a ludoQuickRoleColorType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ludoQuickRoleColorType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ludo_quick_detail.ludoQuickRoleColorType;

        /**
         * Verifies a ludoQuickRoleColorType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ludoQuickRoleColorType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ludoQuickRoleColorType
         */
        public static fromObject(object: { [k: string]: any }): ludo_quick_detail.ludoQuickRoleColorType;

        /**
         * Creates a plain object from a ludoQuickRoleColorType message. Also converts values to other types if specified.
         * @param message ludoQuickRoleColorType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ludo_quick_detail.ludoQuickRoleColorType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ludoQuickRoleColorType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ludoQuickDetailType. */
    interface IludoQuickDetailType {

        /** ludoQuickDetailType pos */
        pos: number;

        /** ludoQuickDetailType profit */
        profit: (number|Long);
    }

    /** Represents a ludoQuickDetailType. */
    class ludoQuickDetailType implements IludoQuickDetailType {

        /**
         * Constructs a new ludoQuickDetailType.
         * @param [properties] Properties to set
         */
        constructor(properties?: ludo_quick_detail.IludoQuickDetailType);

        /** ludoQuickDetailType pos. */
        public pos: number;

        /** ludoQuickDetailType profit. */
        public profit: (number|Long);

        /**
         * Creates a new ludoQuickDetailType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ludoQuickDetailType instance
         */
        public static create(properties?: ludo_quick_detail.IludoQuickDetailType): ludo_quick_detail.ludoQuickDetailType;

        /**
         * Encodes the specified ludoQuickDetailType message. Does not implicitly {@link ludo_quick_detail.ludoQuickDetailType.verify|verify} messages.
         * @param message ludoQuickDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ludo_quick_detail.IludoQuickDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ludoQuickDetailType message, length delimited. Does not implicitly {@link ludo_quick_detail.ludoQuickDetailType.verify|verify} messages.
         * @param message ludoQuickDetailType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ludo_quick_detail.IludoQuickDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ludoQuickDetailType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ludoQuickDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ludo_quick_detail.ludoQuickDetailType;

        /**
         * Decodes a ludoQuickDetailType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ludoQuickDetailType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ludo_quick_detail.ludoQuickDetailType;

        /**
         * Verifies a ludoQuickDetailType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ludoQuickDetailType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ludoQuickDetailType
         */
        public static fromObject(object: { [k: string]: any }): ludo_quick_detail.ludoQuickDetailType;

        /**
         * Creates a plain object from a ludoQuickDetailType message. Also converts values to other types if specified.
         * @param message ludoQuickDetailType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ludo_quick_detail.ludoQuickDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ludoQuickDetailType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a layout_hash_type. */
export class layout_hash_type implements Ilayout_hash_type {

    /**
     * Constructs a new layout_hash_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilayout_hash_type);

    /** layout_hash_type issue. */
    public issue: (number|Long);

    /** layout_hash_type serverSeed. */
    public serverSeed: string;

    /** layout_hash_type serverSeedHash. */
    public serverSeedHash: string;

    /** layout_hash_type clientSeed. */
    public clientSeed: string;

    /** layout_hash_type nonce. */
    public nonce: number;

    /** layout_hash_type layoutHash. */
    public layoutHash: string;

    /**
     * Creates a new layout_hash_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns layout_hash_type instance
     */
    public static create(properties?: Ilayout_hash_type): layout_hash_type;

    /**
     * Encodes the specified layout_hash_type message. Does not implicitly {@link layout_hash_type.verify|verify} messages.
     * @param message layout_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilayout_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified layout_hash_type message, length delimited. Does not implicitly {@link layout_hash_type.verify|verify} messages.
     * @param message layout_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilayout_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a layout_hash_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns layout_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): layout_hash_type;

    /**
     * Decodes a layout_hash_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns layout_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): layout_hash_type;

    /**
     * Verifies a layout_hash_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a layout_hash_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns layout_hash_type
     */
    public static fromObject(object: { [k: string]: any }): layout_hash_type;

    /**
     * Creates a plain object from a layout_hash_type message. Also converts values to other types if specified.
     * @param message layout_hash_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: layout_hash_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this layout_hash_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an arcade_hash_type. */
export class arcade_hash_type implements Iarcade_hash_type {

    /**
     * Constructs a new arcade_hash_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iarcade_hash_type);

    /** arcade_hash_type cutIndex. */
    public cutIndex: number;

    /** arcade_hash_type cards. */
    public cards: Iarcade_hash_card_info[];

    /** arcade_hash_type areaCards. */
    public areaCards: Iarcade_hash_area_cards[];

    /** arcade_hash_type posCards. */
    public posCards: Iarcade_hash_pos_cards[];

    /**
     * Creates a new arcade_hash_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns arcade_hash_type instance
     */
    public static create(properties?: Iarcade_hash_type): arcade_hash_type;

    /**
     * Encodes the specified arcade_hash_type message. Does not implicitly {@link arcade_hash_type.verify|verify} messages.
     * @param message arcade_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iarcade_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified arcade_hash_type message, length delimited. Does not implicitly {@link arcade_hash_type.verify|verify} messages.
     * @param message arcade_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iarcade_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an arcade_hash_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns arcade_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arcade_hash_type;

    /**
     * Decodes an arcade_hash_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns arcade_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arcade_hash_type;

    /**
     * Verifies an arcade_hash_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an arcade_hash_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns arcade_hash_type
     */
    public static fromObject(object: { [k: string]: any }): arcade_hash_type;

    /**
     * Creates a plain object from an arcade_hash_type message. Also converts values to other types if specified.
     * @param message arcade_hash_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: arcade_hash_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this arcade_hash_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an arcade_hash_card_info. */
export class arcade_hash_card_info implements Iarcade_hash_card_info {

    /**
     * Constructs a new arcade_hash_card_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iarcade_hash_card_info);

    /** arcade_hash_card_info index. */
    public index: number;

    /** arcade_hash_card_info plaintext. */
    public plaintext: string;

    /** arcade_hash_card_info ciphertext. */
    public ciphertext: string;

    /** arcade_hash_card_info point. */
    public point: number;

    /** arcade_hash_card_info color. */
    public color: number;

    /**
     * Creates a new arcade_hash_card_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns arcade_hash_card_info instance
     */
    public static create(properties?: Iarcade_hash_card_info): arcade_hash_card_info;

    /**
     * Encodes the specified arcade_hash_card_info message. Does not implicitly {@link arcade_hash_card_info.verify|verify} messages.
     * @param message arcade_hash_card_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iarcade_hash_card_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified arcade_hash_card_info message, length delimited. Does not implicitly {@link arcade_hash_card_info.verify|verify} messages.
     * @param message arcade_hash_card_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iarcade_hash_card_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an arcade_hash_card_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns arcade_hash_card_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arcade_hash_card_info;

    /**
     * Decodes an arcade_hash_card_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns arcade_hash_card_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arcade_hash_card_info;

    /**
     * Verifies an arcade_hash_card_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an arcade_hash_card_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns arcade_hash_card_info
     */
    public static fromObject(object: { [k: string]: any }): arcade_hash_card_info;

    /**
     * Creates a plain object from an arcade_hash_card_info message. Also converts values to other types if specified.
     * @param message arcade_hash_card_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: arcade_hash_card_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this arcade_hash_card_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an arcade_hash_area_cards. */
export class arcade_hash_area_cards implements Iarcade_hash_area_cards {

    /**
     * Constructs a new arcade_hash_area_cards.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iarcade_hash_area_cards);

    /** arcade_hash_area_cards areaId. */
    public areaId: number;

    /** arcade_hash_area_cards cards. */
    public cards: Iarcade_hash_card_info[];

    /** arcade_hash_area_cards multi. */
    public multi: number;

    /** arcade_hash_area_cards cardType. */
    public cardType: number;

    /**
     * Creates a new arcade_hash_area_cards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns arcade_hash_area_cards instance
     */
    public static create(properties?: Iarcade_hash_area_cards): arcade_hash_area_cards;

    /**
     * Encodes the specified arcade_hash_area_cards message. Does not implicitly {@link arcade_hash_area_cards.verify|verify} messages.
     * @param message arcade_hash_area_cards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iarcade_hash_area_cards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified arcade_hash_area_cards message, length delimited. Does not implicitly {@link arcade_hash_area_cards.verify|verify} messages.
     * @param message arcade_hash_area_cards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iarcade_hash_area_cards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an arcade_hash_area_cards message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns arcade_hash_area_cards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arcade_hash_area_cards;

    /**
     * Decodes an arcade_hash_area_cards message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns arcade_hash_area_cards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arcade_hash_area_cards;

    /**
     * Verifies an arcade_hash_area_cards message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an arcade_hash_area_cards message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns arcade_hash_area_cards
     */
    public static fromObject(object: { [k: string]: any }): arcade_hash_area_cards;

    /**
     * Creates a plain object from an arcade_hash_area_cards message. Also converts values to other types if specified.
     * @param message arcade_hash_area_cards
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: arcade_hash_area_cards, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this arcade_hash_area_cards to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an arcade_hash_pos_cards. */
export class arcade_hash_pos_cards implements Iarcade_hash_pos_cards {

    /**
     * Constructs a new arcade_hash_pos_cards.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iarcade_hash_pos_cards);

    /** arcade_hash_pos_cards pos. */
    public pos: number;

    /** arcade_hash_pos_cards id. */
    public id: number;

    /** arcade_hash_pos_cards userName. */
    public userName: string;

    /** arcade_hash_pos_cards cards. */
    public cards: Iarcade_hash_card_info[];

    /**
     * Creates a new arcade_hash_pos_cards instance using the specified properties.
     * @param [properties] Properties to set
     * @returns arcade_hash_pos_cards instance
     */
    public static create(properties?: Iarcade_hash_pos_cards): arcade_hash_pos_cards;

    /**
     * Encodes the specified arcade_hash_pos_cards message. Does not implicitly {@link arcade_hash_pos_cards.verify|verify} messages.
     * @param message arcade_hash_pos_cards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iarcade_hash_pos_cards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified arcade_hash_pos_cards message, length delimited. Does not implicitly {@link arcade_hash_pos_cards.verify|verify} messages.
     * @param message arcade_hash_pos_cards message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iarcade_hash_pos_cards, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an arcade_hash_pos_cards message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns arcade_hash_pos_cards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arcade_hash_pos_cards;

    /**
     * Decodes an arcade_hash_pos_cards message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns arcade_hash_pos_cards
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arcade_hash_pos_cards;

    /**
     * Verifies an arcade_hash_pos_cards message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an arcade_hash_pos_cards message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns arcade_hash_pos_cards
     */
    public static fromObject(object: { [k: string]: any }): arcade_hash_pos_cards;

    /**
     * Creates a plain object from an arcade_hash_pos_cards message. Also converts values to other types if specified.
     * @param message arcade_hash_pos_cards
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: arcade_hash_pos_cards, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this arcade_hash_pos_cards to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lg_detail_type. */
export class lg_detail_type implements Ilg_detail_type {

    /**
     * Constructs a new lg_detail_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilg_detail_type);

    /** lg_detail_type rgProcess. */
    public rgProcess: Irg_process_type[];

    /**
     * Creates a new lg_detail_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lg_detail_type instance
     */
    public static create(properties?: Ilg_detail_type): lg_detail_type;

    /**
     * Encodes the specified lg_detail_type message. Does not implicitly {@link lg_detail_type.verify|verify} messages.
     * @param message lg_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilg_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lg_detail_type message, length delimited. Does not implicitly {@link lg_detail_type.verify|verify} messages.
     * @param message lg_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilg_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lg_detail_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lg_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lg_detail_type;

    /**
     * Decodes a lg_detail_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lg_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lg_detail_type;

    /**
     * Verifies a lg_detail_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lg_detail_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lg_detail_type
     */
    public static fromObject(object: { [k: string]: any }): lg_detail_type;

    /**
     * Creates a plain object from a lg_detail_type message. Also converts values to other types if specified.
     * @param message lg_detail_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lg_detail_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lg_detail_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a rg_process_type. */
export class rg_process_type implements Irg_process_type {

    /**
     * Constructs a new rg_process_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Irg_process_type);

    /** rg_process_type sceneId. */
    public sceneId: number;

    /** rg_process_type index. */
    public index: number;

    /** rg_process_type type. */
    public type: number;

    /** rg_process_type reward. */
    public reward: (number|Long);

    /**
     * Creates a new rg_process_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns rg_process_type instance
     */
    public static create(properties?: Irg_process_type): rg_process_type;

    /**
     * Encodes the specified rg_process_type message. Does not implicitly {@link rg_process_type.verify|verify} messages.
     * @param message rg_process_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Irg_process_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified rg_process_type message, length delimited. Does not implicitly {@link rg_process_type.verify|verify} messages.
     * @param message rg_process_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Irg_process_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a rg_process_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns rg_process_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rg_process_type;

    /**
     * Decodes a rg_process_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns rg_process_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rg_process_type;

    /**
     * Verifies a rg_process_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a rg_process_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns rg_process_type
     */
    public static fromObject(object: { [k: string]: any }): rg_process_type;

    /**
     * Creates a plain object from a rg_process_type message. Also converts values to other types if specified.
     * @param message rg_process_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rg_process_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this rg_process_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a card5ShowType. */
export class card5ShowType implements Icard5ShowType {

    /**
     * Constructs a new card5ShowType.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icard5ShowType);

    /** card5ShowType index. */
    public index: number;

    /** card5ShowType isRemain. */
    public isRemain: boolean;

    /** card5ShowType point. */
    public point: number;

    /** card5ShowType color. */
    public color: number;

    /**
     * Creates a new card5ShowType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns card5ShowType instance
     */
    public static create(properties?: Icard5ShowType): card5ShowType;

    /**
     * Encodes the specified card5ShowType message. Does not implicitly {@link card5ShowType.verify|verify} messages.
     * @param message card5ShowType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icard5ShowType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified card5ShowType message, length delimited. Does not implicitly {@link card5ShowType.verify|verify} messages.
     * @param message card5ShowType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icard5ShowType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a card5ShowType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns card5ShowType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card5ShowType;

    /**
     * Decodes a card5ShowType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns card5ShowType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): card5ShowType;

    /**
     * Verifies a card5ShowType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a card5ShowType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns card5ShowType
     */
    public static fromObject(object: { [k: string]: any }): card5ShowType;

    /**
     * Creates a plain object from a card5ShowType message. Also converts values to other types if specified.
     * @param message card5ShowType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: card5ShowType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this card5ShowType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a pai_kang_detail. */
export class pai_kang_detail implements Ipai_kang_detail {

    /**
     * Constructs a new pai_kang_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipai_kang_detail);

    /** pai_kang_detail total. */
    public total: Ipai_kang_total_detail[];

    /**
     * Creates a new pai_kang_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pai_kang_detail instance
     */
    public static create(properties?: Ipai_kang_detail): pai_kang_detail;

    /**
     * Encodes the specified pai_kang_detail message. Does not implicitly {@link pai_kang_detail.verify|verify} messages.
     * @param message pai_kang_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipai_kang_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pai_kang_detail message, length delimited. Does not implicitly {@link pai_kang_detail.verify|verify} messages.
     * @param message pai_kang_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipai_kang_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pai_kang_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pai_kang_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pai_kang_detail;

    /**
     * Decodes a pai_kang_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pai_kang_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pai_kang_detail;

    /**
     * Verifies a pai_kang_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pai_kang_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pai_kang_detail
     */
    public static fromObject(object: { [k: string]: any }): pai_kang_detail;

    /**
     * Creates a plain object from a pai_kang_detail message. Also converts values to other types if specified.
     * @param message pai_kang_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pai_kang_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pai_kang_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a pai_kang_total_detail. */
export class pai_kang_total_detail implements Ipai_kang_total_detail {

    /**
     * Constructs a new pai_kang_total_detail.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ipai_kang_total_detail);

    /** pai_kang_total_detail pos. */
    public pos: number;

    /** pai_kang_total_detail userName. */
    public userName: string;

    /** pai_kang_total_detail isSelf. */
    public isSelf: boolean;

    /** pai_kang_total_detail isWin. */
    public isWin: boolean;

    /** pai_kang_total_detail points. */
    public points: number;

    /** pai_kang_total_detail cards. */
    public cards: Icard_info[];

    /** pai_kang_total_detail calType. */
    public calType: number;

    /** pai_kang_total_detail calMulti. */
    public calMulti: number;

    /** pai_kang_total_detail baseScores. */
    public baseScores: (number|Long);

    /** pai_kang_total_detail profit. */
    public profit: (number|Long);

    /** pai_kang_total_detail attackProfit. */
    public attackProfit: (number|Long);

    /** pai_kang_total_detail totalProfit. */
    public totalProfit: (number|Long);

    /**
     * Creates a new pai_kang_total_detail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns pai_kang_total_detail instance
     */
    public static create(properties?: Ipai_kang_total_detail): pai_kang_total_detail;

    /**
     * Encodes the specified pai_kang_total_detail message. Does not implicitly {@link pai_kang_total_detail.verify|verify} messages.
     * @param message pai_kang_total_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ipai_kang_total_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified pai_kang_total_detail message, length delimited. Does not implicitly {@link pai_kang_total_detail.verify|verify} messages.
     * @param message pai_kang_total_detail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ipai_kang_total_detail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a pai_kang_total_detail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns pai_kang_total_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pai_kang_total_detail;

    /**
     * Decodes a pai_kang_total_detail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns pai_kang_total_detail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pai_kang_total_detail;

    /**
     * Verifies a pai_kang_total_detail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a pai_kang_total_detail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns pai_kang_total_detail
     */
    public static fromObject(object: { [k: string]: any }): pai_kang_total_detail;

    /**
     * Creates a plain object from a pai_kang_total_detail message. Also converts values to other types if specified.
     * @param message pai_kang_total_detail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: pai_kang_total_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this pai_kang_total_detail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** hunter_report_cmd enum. */
export enum hunter_report_cmd {
    normalDetail = 0,
    worldBossDetail = 1
}

/** Represents a msg_hunter_report_service */
export class msg_hunter_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_hunter_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_hunter_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_hunter_report_service;
}

/** Represents a normalDetail. */
export class normalDetail implements InormalDetail {

    /**
     * Constructs a new normalDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: InormalDetail);

    /** normalDetail detail. */
    public detail: IdetailHunterType[];

    /**
     * Creates a new normalDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns normalDetail instance
     */
    public static create(properties?: InormalDetail): normalDetail;

    /**
     * Encodes the specified normalDetail message. Does not implicitly {@link normalDetail.verify|verify} messages.
     * @param message normalDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: InormalDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified normalDetail message, length delimited. Does not implicitly {@link normalDetail.verify|verify} messages.
     * @param message normalDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: InormalDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a normalDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns normalDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): normalDetail;

    /**
     * Decodes a normalDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns normalDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): normalDetail;

    /**
     * Verifies a normalDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a normalDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns normalDetail
     */
    public static fromObject(object: { [k: string]: any }): normalDetail;

    /**
     * Creates a plain object from a normalDetail message. Also converts values to other types if specified.
     * @param message normalDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: normalDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this normalDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a detailHunterType. */
export class detailHunterType implements IdetailHunterType {

    /**
     * Constructs a new detailHunterType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IdetailHunterType);

    /** detailHunterType bulletId. */
    public bulletId: (number|Long);

    /** detailHunterType bulletValue. */
    public bulletValue: (number|Long);

    /** detailHunterType winLose. */
    public winLose: (number|Long);

    /** detailHunterType roomRate. */
    public roomRate: number;

    /** detailHunterType shootTime. */
    public shootTime: (number|Long);

    /** detailHunterType fishId. */
    public fishId: (number|Long);

    /** detailHunterType isDead. */
    public isDead: isDeadType;

    /** detailHunterType fishMulti. */
    public fishMulti: number;

    /** detailHunterType bulletHash. */
    public bulletHash: string;

    /** detailHunterType hashMulti. */
    public hashMulti: number;

    /** detailHunterType extend. */
    public extend?: (IextendType|null);

    /**
     * Creates a new detailHunterType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns detailHunterType instance
     */
    public static create(properties?: IdetailHunterType): detailHunterType;

    /**
     * Encodes the specified detailHunterType message. Does not implicitly {@link detailHunterType.verify|verify} messages.
     * @param message detailHunterType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IdetailHunterType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified detailHunterType message, length delimited. Does not implicitly {@link detailHunterType.verify|verify} messages.
     * @param message detailHunterType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IdetailHunterType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a detailHunterType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns detailHunterType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): detailHunterType;

    /**
     * Decodes a detailHunterType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns detailHunterType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): detailHunterType;

    /**
     * Verifies a detailHunterType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a detailHunterType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns detailHunterType
     */
    public static fromObject(object: { [k: string]: any }): detailHunterType;

    /**
     * Creates a plain object from a detailHunterType message. Also converts values to other types if specified.
     * @param message detailHunterType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: detailHunterType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this detailHunterType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an extendType. */
export class extendType implements IextendType {

    /**
     * Constructs a new extendType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IextendType);

    /** extendType playerType. */
    public playerType: number;

    /** extendType rtp. */
    public rtp: (number|Long);

    /** extendType regulationStatus. */
    public regulationStatus: number;

    /** extendType regulation. */
    public regulation: number;

    /** extendType endMoney. */
    public endMoney: (number|Long);

    /** extendType sumRecharge. */
    public sumRecharge: (number|Long);

    /** extendType sumWithdraw. */
    public sumWithdraw: (number|Long);

    /**
     * Creates a new extendType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns extendType instance
     */
    public static create(properties?: IextendType): extendType;

    /**
     * Encodes the specified extendType message. Does not implicitly {@link extendType.verify|verify} messages.
     * @param message extendType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IextendType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified extendType message, length delimited. Does not implicitly {@link extendType.verify|verify} messages.
     * @param message extendType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IextendType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an extendType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns extendType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): extendType;

    /**
     * Decodes an extendType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns extendType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): extendType;

    /**
     * Verifies an extendType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an extendType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns extendType
     */
    public static fromObject(object: { [k: string]: any }): extendType;

    /**
     * Creates a plain object from an extendType message. Also converts values to other types if specified.
     * @param message extendType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: extendType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this extendType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** isDeadType enum. */
export enum isDeadType {
    is_dead_true = 1,
    is_dead_false = 0
}

/** Represents a worldBossDetail. */
export class worldBossDetail implements IworldBossDetail {

    /**
     * Constructs a new worldBossDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldBossDetail);

    /** worldBossDetail fishId. */
    public fishId: number;

    /** worldBossDetail rank. */
    public rank: number;

    /** worldBossDetail rankVal. */
    public rankVal: (number|Long);

    /** worldBossDetail bonus. */
    public bonus: (number|Long);

    /** worldBossDetail lastHitBonus. */
    public lastHitBonus: (number|Long);

    /**
     * Creates a new worldBossDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldBossDetail instance
     */
    public static create(properties?: IworldBossDetail): worldBossDetail;

    /**
     * Encodes the specified worldBossDetail message. Does not implicitly {@link worldBossDetail.verify|verify} messages.
     * @param message worldBossDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldBossDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldBossDetail message, length delimited. Does not implicitly {@link worldBossDetail.verify|verify} messages.
     * @param message worldBossDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldBossDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldBossDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldBossDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldBossDetail;

    /**
     * Decodes a worldBossDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldBossDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldBossDetail;

    /**
     * Verifies a worldBossDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldBossDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldBossDetail
     */
    public static fromObject(object: { [k: string]: any }): worldBossDetail;

    /**
     * Creates a plain object from a worldBossDetail message. Also converts values to other types if specified.
     * @param message worldBossDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldBossDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldBossDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** jackpot_cmd enum. */
export enum jackpot_cmd {
    jackpotInfoReq = 0,
    jackpotInfoResp = 1,
    jackpotRewardPush = 2
}

/** Represents a msg_jackpot_service */
export class msg_jackpot_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_jackpot_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_jackpot_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_jackpot_service;
}

/** Represents a jackpotInfoReq. */
export class jackpotInfoReq implements IjackpotInfoReq {

    /**
     * Constructs a new jackpotInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IjackpotInfoReq);

    /** jackpotInfoReq gameId. */
    public gameId: (number|Long);

    /**
     * Creates a new jackpotInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns jackpotInfoReq instance
     */
    public static create(properties?: IjackpotInfoReq): jackpotInfoReq;

    /**
     * Encodes the specified jackpotInfoReq message. Does not implicitly {@link jackpotInfoReq.verify|verify} messages.
     * @param message jackpotInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IjackpotInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified jackpotInfoReq message, length delimited. Does not implicitly {@link jackpotInfoReq.verify|verify} messages.
     * @param message jackpotInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IjackpotInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a jackpotInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns jackpotInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jackpotInfoReq;

    /**
     * Decodes a jackpotInfoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns jackpotInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jackpotInfoReq;

    /**
     * Verifies a jackpotInfoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a jackpotInfoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns jackpotInfoReq
     */
    public static fromObject(object: { [k: string]: any }): jackpotInfoReq;

    /**
     * Creates a plain object from a jackpotInfoReq message. Also converts values to other types if specified.
     * @param message jackpotInfoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: jackpotInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this jackpotInfoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a jackpotInfoResp. */
export class jackpotInfoResp implements IjackpotInfoResp {

    /**
     * Constructs a new jackpotInfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IjackpotInfoResp);

    /** jackpotInfoResp jpInfo. */
    public jpInfo: IjpInfoType[];

    /**
     * Creates a new jackpotInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns jackpotInfoResp instance
     */
    public static create(properties?: IjackpotInfoResp): jackpotInfoResp;

    /**
     * Encodes the specified jackpotInfoResp message. Does not implicitly {@link jackpotInfoResp.verify|verify} messages.
     * @param message jackpotInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IjackpotInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified jackpotInfoResp message, length delimited. Does not implicitly {@link jackpotInfoResp.verify|verify} messages.
     * @param message jackpotInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IjackpotInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a jackpotInfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns jackpotInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jackpotInfoResp;

    /**
     * Decodes a jackpotInfoResp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns jackpotInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jackpotInfoResp;

    /**
     * Verifies a jackpotInfoResp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a jackpotInfoResp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns jackpotInfoResp
     */
    public static fromObject(object: { [k: string]: any }): jackpotInfoResp;

    /**
     * Creates a plain object from a jackpotInfoResp message. Also converts values to other types if specified.
     * @param message jackpotInfoResp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: jackpotInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this jackpotInfoResp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a jackpotRewardPush. */
export class jackpotRewardPush implements IjackpotRewardPush {

    /**
     * Constructs a new jackpotRewardPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IjackpotRewardPush);

    /** jackpotRewardPush userId. */
    public userId: (number|Long);

    /** jackpotRewardPush userName. */
    public userName: string;

    /** jackpotRewardPush gameId. */
    public gameId: (number|Long);

    /** jackpotRewardPush jpId. */
    public jpId: number;

    /** jackpotRewardPush reward. */
    public reward: (number|Long);

    /**
     * Creates a new jackpotRewardPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns jackpotRewardPush instance
     */
    public static create(properties?: IjackpotRewardPush): jackpotRewardPush;

    /**
     * Encodes the specified jackpotRewardPush message. Does not implicitly {@link jackpotRewardPush.verify|verify} messages.
     * @param message jackpotRewardPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IjackpotRewardPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified jackpotRewardPush message, length delimited. Does not implicitly {@link jackpotRewardPush.verify|verify} messages.
     * @param message jackpotRewardPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IjackpotRewardPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a jackpotRewardPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns jackpotRewardPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jackpotRewardPush;

    /**
     * Decodes a jackpotRewardPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns jackpotRewardPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jackpotRewardPush;

    /**
     * Verifies a jackpotRewardPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a jackpotRewardPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns jackpotRewardPush
     */
    public static fromObject(object: { [k: string]: any }): jackpotRewardPush;

    /**
     * Creates a plain object from a jackpotRewardPush message. Also converts values to other types if specified.
     * @param message jackpotRewardPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: jackpotRewardPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this jackpotRewardPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a jpInfoType. */
export class jpInfoType implements IjpInfoType {

    /**
     * Constructs a new jpInfoType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IjpInfoType);

    /** jpInfoType jpId. */
    public jpId: number;

    /** jpInfoType value. */
    public value: (number|Long);

    /**
     * Creates a new jpInfoType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns jpInfoType instance
     */
    public static create(properties?: IjpInfoType): jpInfoType;

    /**
     * Encodes the specified jpInfoType message. Does not implicitly {@link jpInfoType.verify|verify} messages.
     * @param message jpInfoType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IjpInfoType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified jpInfoType message, length delimited. Does not implicitly {@link jpInfoType.verify|verify} messages.
     * @param message jpInfoType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IjpInfoType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a jpInfoType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns jpInfoType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jpInfoType;

    /**
     * Decodes a jpInfoType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns jpInfoType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jpInfoType;

    /**
     * Verifies a jpInfoType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a jpInfoType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns jpInfoType
     */
    public static fromObject(object: { [k: string]: any }): jpInfoType;

    /**
     * Creates a plain object from a jpInfoType message. Also converts values to other types if specified.
     * @param message jpInfoType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: jpInfoType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this jpInfoType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** jackpot_report_cmd enum. */
export enum jackpot_report_cmd {
    jackpotDetail = 0
}

/** Represents a msg_jackpot_report_service */
export class msg_jackpot_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_jackpot_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_jackpot_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_jackpot_report_service;
}

/** Represents a jackpotDetail. */
export class jackpotDetail implements IjackpotDetail {

    /**
     * Constructs a new jackpotDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IjackpotDetail);

    /** jackpotDetail roundId. */
    public roundId: (number|Long);

    /** jackpotDetail jpId. */
    public jpId: number;

    /** jackpotDetail reward. */
    public reward: (number|Long);

    /**
     * Creates a new jackpotDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns jackpotDetail instance
     */
    public static create(properties?: IjackpotDetail): jackpotDetail;

    /**
     * Encodes the specified jackpotDetail message. Does not implicitly {@link jackpotDetail.verify|verify} messages.
     * @param message jackpotDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IjackpotDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified jackpotDetail message, length delimited. Does not implicitly {@link jackpotDetail.verify|verify} messages.
     * @param message jackpotDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IjackpotDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a jackpotDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns jackpotDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): jackpotDetail;

    /**
     * Decodes a jackpotDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns jackpotDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): jackpotDetail;

    /**
     * Verifies a jackpotDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a jackpotDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns jackpotDetail
     */
    public static fromObject(object: { [k: string]: any }): jackpotDetail;

    /**
     * Creates a plain object from a jackpotDetail message. Also converts values to other types if specified.
     * @param message jackpotDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: jackpotDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this jackpotDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** lottery_report_cmd enum. */
export enum lottery_report_cmd {
    lotteryCommonDetail = 0,
    lotteryPlayerDetail = 1
}

/** Represents a msg_lottery_report_service */
export class msg_lottery_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_lottery_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_lottery_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_lottery_report_service;
}

/** Represents a lotteryCommonDetail. */
export class lotteryCommonDetail implements IlotteryCommonDetail {

    /**
     * Constructs a new lotteryCommonDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IlotteryCommonDetail);

    /** lotteryCommonDetail issue. */
    public issue: (number|Long);

    /** lotteryCommonDetail baseScores. */
    public baseScores: (number|Long);

    /** lotteryCommonDetail hash. */
    public hash?: (Ilottery_hash_type|null);

    /** lotteryCommonDetail spread. */
    public spread: number[];

    /**
     * Creates a new lotteryCommonDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lotteryCommonDetail instance
     */
    public static create(properties?: IlotteryCommonDetail): lotteryCommonDetail;

    /**
     * Encodes the specified lotteryCommonDetail message. Does not implicitly {@link lotteryCommonDetail.verify|verify} messages.
     * @param message lotteryCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IlotteryCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lotteryCommonDetail message, length delimited. Does not implicitly {@link lotteryCommonDetail.verify|verify} messages.
     * @param message lotteryCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IlotteryCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lotteryCommonDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lotteryCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lotteryCommonDetail;

    /**
     * Decodes a lotteryCommonDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lotteryCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lotteryCommonDetail;

    /**
     * Verifies a lotteryCommonDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lotteryCommonDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lotteryCommonDetail
     */
    public static fromObject(object: { [k: string]: any }): lotteryCommonDetail;

    /**
     * Creates a plain object from a lotteryCommonDetail message. Also converts values to other types if specified.
     * @param message lotteryCommonDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lotteryCommonDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lotteryCommonDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lotteryPlayerDetail. */
export class lotteryPlayerDetail implements IlotteryPlayerDetail {

    /**
     * Constructs a new lotteryPlayerDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IlotteryPlayerDetail);

    /** lotteryPlayerDetail tickets. */
    public tickets: Ilottery_ticket_type[];

    /** lotteryPlayerDetail betScores. */
    public betScores: (number|Long);

    /** lotteryPlayerDetail playType. */
    public playType: number;

    /** lotteryPlayerDetail coinRate. */
    public coinRate: number;

    /** lotteryPlayerDetail winScores. */
    public winScores: (number|Long);

    /**
     * Creates a new lotteryPlayerDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lotteryPlayerDetail instance
     */
    public static create(properties?: IlotteryPlayerDetail): lotteryPlayerDetail;

    /**
     * Encodes the specified lotteryPlayerDetail message. Does not implicitly {@link lotteryPlayerDetail.verify|verify} messages.
     * @param message lotteryPlayerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IlotteryPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lotteryPlayerDetail message, length delimited. Does not implicitly {@link lotteryPlayerDetail.verify|verify} messages.
     * @param message lotteryPlayerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IlotteryPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lotteryPlayerDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lotteryPlayerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lotteryPlayerDetail;

    /**
     * Decodes a lotteryPlayerDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lotteryPlayerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lotteryPlayerDetail;

    /**
     * Verifies a lotteryPlayerDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lotteryPlayerDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lotteryPlayerDetail
     */
    public static fromObject(object: { [k: string]: any }): lotteryPlayerDetail;

    /**
     * Creates a plain object from a lotteryPlayerDetail message. Also converts values to other types if specified.
     * @param message lotteryPlayerDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lotteryPlayerDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lotteryPlayerDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lottery_hash_type. */
export class lottery_hash_type implements Ilottery_hash_type {

    /**
     * Constructs a new lottery_hash_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilottery_hash_type);

    /** lottery_hash_type issue. */
    public issue: (number|Long);

    /** lottery_hash_type serverSeed. */
    public serverSeed: string;

    /** lottery_hash_type serverSeedHash. */
    public serverSeedHash: string;

    /** lottery_hash_type clientSeed. */
    public clientSeed: string;

    /** lottery_hash_type nonce. */
    public nonce: number;

    /** lottery_hash_type hash. */
    public hash: string;

    /**
     * Creates a new lottery_hash_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lottery_hash_type instance
     */
    public static create(properties?: Ilottery_hash_type): lottery_hash_type;

    /**
     * Encodes the specified lottery_hash_type message. Does not implicitly {@link lottery_hash_type.verify|verify} messages.
     * @param message lottery_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilottery_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lottery_hash_type message, length delimited. Does not implicitly {@link lottery_hash_type.verify|verify} messages.
     * @param message lottery_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilottery_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lottery_hash_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lottery_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery_hash_type;

    /**
     * Decodes a lottery_hash_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lottery_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery_hash_type;

    /**
     * Verifies a lottery_hash_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lottery_hash_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lottery_hash_type
     */
    public static fromObject(object: { [k: string]: any }): lottery_hash_type;

    /**
     * Creates a plain object from a lottery_hash_type message. Also converts values to other types if specified.
     * @param message lottery_hash_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lottery_hash_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lottery_hash_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lottery_ticket_type. */
export class lottery_ticket_type implements Ilottery_ticket_type {

    /**
     * Constructs a new lottery_ticket_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilottery_ticket_type);

    /** lottery_ticket_type ticketId. */
    public ticketId: number;

    /** lottery_ticket_type columns. */
    public columns: Ilottery_column_type[];

    /** lottery_ticket_type betScores. */
    public betScores: (number|Long);

    /** lottery_ticket_type betMulti. */
    public betMulti: number;

    /** lottery_ticket_type odds. */
    public odds: number;

    /** lottery_ticket_type winScores. */
    public winScores: (number|Long);

    /** lottery_ticket_type winLineList. */
    public winLineList: Ilottery_line_type[];

    /** lottery_ticket_type state. */
    public state: number;

    /**
     * Creates a new lottery_ticket_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lottery_ticket_type instance
     */
    public static create(properties?: Ilottery_ticket_type): lottery_ticket_type;

    /**
     * Encodes the specified lottery_ticket_type message. Does not implicitly {@link lottery_ticket_type.verify|verify} messages.
     * @param message lottery_ticket_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilottery_ticket_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lottery_ticket_type message, length delimited. Does not implicitly {@link lottery_ticket_type.verify|verify} messages.
     * @param message lottery_ticket_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilottery_ticket_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lottery_ticket_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lottery_ticket_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery_ticket_type;

    /**
     * Decodes a lottery_ticket_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lottery_ticket_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery_ticket_type;

    /**
     * Verifies a lottery_ticket_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lottery_ticket_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lottery_ticket_type
     */
    public static fromObject(object: { [k: string]: any }): lottery_ticket_type;

    /**
     * Creates a plain object from a lottery_ticket_type message. Also converts values to other types if specified.
     * @param message lottery_ticket_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lottery_ticket_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lottery_ticket_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lottery_column_type. */
export class lottery_column_type implements Ilottery_column_type {

    /**
     * Constructs a new lottery_column_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilottery_column_type);

    /** lottery_column_type columnId. */
    public columnId: number;

    /** lottery_column_type grids. */
    public grids: Ilottery_grid_type[];

    /**
     * Creates a new lottery_column_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lottery_column_type instance
     */
    public static create(properties?: Ilottery_column_type): lottery_column_type;

    /**
     * Encodes the specified lottery_column_type message. Does not implicitly {@link lottery_column_type.verify|verify} messages.
     * @param message lottery_column_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilottery_column_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lottery_column_type message, length delimited. Does not implicitly {@link lottery_column_type.verify|verify} messages.
     * @param message lottery_column_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilottery_column_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lottery_column_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lottery_column_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery_column_type;

    /**
     * Decodes a lottery_column_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lottery_column_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery_column_type;

    /**
     * Verifies a lottery_column_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lottery_column_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lottery_column_type
     */
    public static fromObject(object: { [k: string]: any }): lottery_column_type;

    /**
     * Creates a plain object from a lottery_column_type message. Also converts values to other types if specified.
     * @param message lottery_column_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lottery_column_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lottery_column_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lottery_grid_type. */
export class lottery_grid_type implements Ilottery_grid_type {

    /**
     * Constructs a new lottery_grid_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilottery_grid_type);

    /** lottery_grid_type gridId. */
    public gridId: number;

    /** lottery_grid_type isValid. */
    public isValid: boolean;

    /** lottery_grid_type element. */
    public element: number;

    /** lottery_grid_type isSpotted. */
    public isSpotted: boolean;

    /** lottery_grid_type betScores. */
    public betScores: (number|Long);

    /** lottery_grid_type betMulti. */
    public betMulti: number;

    /** lottery_grid_type odds. */
    public odds: number;

    /** lottery_grid_type winScores. */
    public winScores: (number|Long);

    /** lottery_grid_type state. */
    public state: number;

    /**
     * Creates a new lottery_grid_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lottery_grid_type instance
     */
    public static create(properties?: Ilottery_grid_type): lottery_grid_type;

    /**
     * Encodes the specified lottery_grid_type message. Does not implicitly {@link lottery_grid_type.verify|verify} messages.
     * @param message lottery_grid_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilottery_grid_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lottery_grid_type message, length delimited. Does not implicitly {@link lottery_grid_type.verify|verify} messages.
     * @param message lottery_grid_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilottery_grid_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lottery_grid_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lottery_grid_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery_grid_type;

    /**
     * Decodes a lottery_grid_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lottery_grid_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery_grid_type;

    /**
     * Verifies a lottery_grid_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lottery_grid_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lottery_grid_type
     */
    public static fromObject(object: { [k: string]: any }): lottery_grid_type;

    /**
     * Creates a plain object from a lottery_grid_type message. Also converts values to other types if specified.
     * @param message lottery_grid_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lottery_grid_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lottery_grid_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lottery_line_type. */
export class lottery_line_type implements Ilottery_line_type {

    /**
     * Constructs a new lottery_line_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilottery_line_type);

    /** lottery_line_type lineId. */
    public lineId: number;

    /** lottery_line_type winScores. */
    public winScores: (number|Long);

    /**
     * Creates a new lottery_line_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lottery_line_type instance
     */
    public static create(properties?: Ilottery_line_type): lottery_line_type;

    /**
     * Encodes the specified lottery_line_type message. Does not implicitly {@link lottery_line_type.verify|verify} messages.
     * @param message lottery_line_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilottery_line_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lottery_line_type message, length delimited. Does not implicitly {@link lottery_line_type.verify|verify} messages.
     * @param message lottery_line_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilottery_line_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lottery_line_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lottery_line_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lottery_line_type;

    /**
     * Decodes a lottery_line_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lottery_line_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lottery_line_type;

    /**
     * Verifies a lottery_line_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lottery_line_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lottery_line_type
     */
    public static fromObject(object: { [k: string]: any }): lottery_line_type;

    /**
     * Creates a plain object from a lottery_line_type message. Also converts values to other types if specified.
     * @param message lottery_line_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lottery_line_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lottery_line_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** qyxz_report_cmd enum. */
export enum qyxz_report_cmd {
    commonDetail = 0,
    playerDetail = 1
}

/** Represents a msg_qyxz_report_service */
export class msg_qyxz_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_qyxz_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_qyxz_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_qyxz_report_service;
}

/** Represents a commonDetail. */
export class commonDetail implements IcommonDetail {

    /**
     * Constructs a new commonDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IcommonDetail);

    /** commonDetail card. */
    public card: Icommon_card_type[];

    /** commonDetail num. */
    public num: number[];

    /** commonDetail baseScores. */
    public baseScores: (number|Long);

    /** commonDetail roomType. */
    public roomType: number;

    /** commonDetail roomId. */
    public roomId: number;

    /** commonDetail bscscan. */
    public bscscan?: (Ibscscan_type|null);

    /** commonDetail hash. */
    public hash?: (Ihash_type|null);

    /** commonDetail crashCommon. */
    public crashCommon?: (Icrash_common_type|null);

    /** commonDetail createHash. */
    public createHash?: (Icreate_hash_type|null);

    /** commonDetail reGameType. */
    public reGameType: number;

    /** commonDetail bscscanList. */
    public bscscanList: Ibscscan_type[];

    /** commonDetail tronscanList. */
    public tronscanList: Itronscan_type[];

    /** commonDetail betEndTimestamp. */
    public betEndTimestamp: (number|Long);

    /** commonDetail type. */
    public type: number;

    /** commonDetail smallType. */
    public smallType: number;

    /**
     * Creates a new commonDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns commonDetail instance
     */
    public static create(properties?: IcommonDetail): commonDetail;

    /**
     * Encodes the specified commonDetail message. Does not implicitly {@link commonDetail.verify|verify} messages.
     * @param message commonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IcommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified commonDetail message, length delimited. Does not implicitly {@link commonDetail.verify|verify} messages.
     * @param message commonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IcommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a commonDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns commonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): commonDetail;

    /**
     * Decodes a commonDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns commonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): commonDetail;

    /**
     * Verifies a commonDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a commonDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns commonDetail
     */
    public static fromObject(object: { [k: string]: any }): commonDetail;

    /**
     * Creates a plain object from a commonDetail message. Also converts values to other types if specified.
     * @param message commonDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: commonDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this commonDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a playerDetail. */
export class playerDetail implements IplayerDetail {

    /**
     * Constructs a new playerDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IplayerDetail);

    /** playerDetail detail. */
    public detail: Iplayer_detail_type[];

    /** playerDetail coinRate. */
    public coinRate: number;

    /**
     * Creates a new playerDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns playerDetail instance
     */
    public static create(properties?: IplayerDetail): playerDetail;

    /**
     * Encodes the specified playerDetail message. Does not implicitly {@link playerDetail.verify|verify} messages.
     * @param message playerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IplayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified playerDetail message, length delimited. Does not implicitly {@link playerDetail.verify|verify} messages.
     * @param message playerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IplayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a playerDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns playerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): playerDetail;

    /**
     * Decodes a playerDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns playerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): playerDetail;

    /**
     * Verifies a playerDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a playerDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns playerDetail
     */
    public static fromObject(object: { [k: string]: any }): playerDetail;

    /**
     * Creates a plain object from a playerDetail message. Also converts values to other types if specified.
     * @param message playerDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: playerDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this playerDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a player_detail_type. */
export class player_detail_type implements Iplayer_detail_type {

    /**
     * Constructs a new player_detail_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iplayer_detail_type);

    /** player_detail_type areaId. */
    public areaId: number;

    /** player_detail_type betScores. */
    public betScores: (number|Long);

    /** player_detail_type multi. */
    public multi: number;

    /** player_detail_type isWin. */
    public isWin: boolean;

    /** player_detail_type profit. */
    public profit: (number|Long);

    /** player_detail_type card. */
    public card?: (Iplayer_card_type|null);

    /** player_detail_type escapePoint. */
    public escapePoint: number;

    /** player_detail_type isGiveUp. */
    public isGiveUp: boolean;

    /**
     * Creates a new player_detail_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns player_detail_type instance
     */
    public static create(properties?: Iplayer_detail_type): player_detail_type;

    /**
     * Encodes the specified player_detail_type message. Does not implicitly {@link player_detail_type.verify|verify} messages.
     * @param message player_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iplayer_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified player_detail_type message, length delimited. Does not implicitly {@link player_detail_type.verify|verify} messages.
     * @param message player_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iplayer_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a player_detail_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns player_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): player_detail_type;

    /**
     * Decodes a player_detail_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns player_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): player_detail_type;

    /**
     * Verifies a player_detail_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a player_detail_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns player_detail_type
     */
    public static fromObject(object: { [k: string]: any }): player_detail_type;

    /**
     * Creates a plain object from a player_detail_type message. Also converts values to other types if specified.
     * @param message player_detail_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: player_detail_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this player_detail_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a player_card_type. */
export class player_card_type implements Iplayer_card_type {

    /**
     * Constructs a new player_card_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iplayer_card_type);

    /** player_card_type cards. */
    public cards: Icard_info[];

    /** player_card_type cardType. */
    public cardType: number;

    /**
     * Creates a new player_card_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns player_card_type instance
     */
    public static create(properties?: Iplayer_card_type): player_card_type;

    /**
     * Encodes the specified player_card_type message. Does not implicitly {@link player_card_type.verify|verify} messages.
     * @param message player_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iplayer_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified player_card_type message, length delimited. Does not implicitly {@link player_card_type.verify|verify} messages.
     * @param message player_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iplayer_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a player_card_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns player_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): player_card_type;

    /**
     * Decodes a player_card_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns player_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): player_card_type;

    /**
     * Verifies a player_card_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a player_card_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns player_card_type
     */
    public static fromObject(object: { [k: string]: any }): player_card_type;

    /**
     * Creates a plain object from a player_card_type message. Also converts values to other types if specified.
     * @param message player_card_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: player_card_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this player_card_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bscscan_type. */
export class bscscan_type implements Ibscscan_type {

    /**
     * Constructs a new bscscan_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibscscan_type);

    /** bscscan_type timestamp. */
    public timestamp: number;

    /** bscscan_type blockNum. */
    public blockNum: number;

    /** bscscan_type blockHash. */
    public blockHash: string;

    /** bscscan_type card. */
    public card: Ibscscan_card_type[];

    /** bscscan_type num. */
    public num: number[];

    /**
     * Creates a new bscscan_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bscscan_type instance
     */
    public static create(properties?: Ibscscan_type): bscscan_type;

    /**
     * Encodes the specified bscscan_type message. Does not implicitly {@link bscscan_type.verify|verify} messages.
     * @param message bscscan_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibscscan_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bscscan_type message, length delimited. Does not implicitly {@link bscscan_type.verify|verify} messages.
     * @param message bscscan_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibscscan_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bscscan_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bscscan_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bscscan_type;

    /**
     * Decodes a bscscan_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bscscan_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bscscan_type;

    /**
     * Verifies a bscscan_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bscscan_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bscscan_type
     */
    public static fromObject(object: { [k: string]: any }): bscscan_type;

    /**
     * Creates a plain object from a bscscan_type message. Also converts values to other types if specified.
     * @param message bscscan_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bscscan_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bscscan_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bscscan_card_type. */
export class bscscan_card_type implements Ibscscan_card_type {

    /**
     * Constructs a new bscscan_card_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ibscscan_card_type);

    /** bscscan_card_type areaId. */
    public areaId: number;

    /** bscscan_card_type cards. */
    public cards: Icard_info[];

    /**
     * Creates a new bscscan_card_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bscscan_card_type instance
     */
    public static create(properties?: Ibscscan_card_type): bscscan_card_type;

    /**
     * Encodes the specified bscscan_card_type message. Does not implicitly {@link bscscan_card_type.verify|verify} messages.
     * @param message bscscan_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ibscscan_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bscscan_card_type message, length delimited. Does not implicitly {@link bscscan_card_type.verify|verify} messages.
     * @param message bscscan_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ibscscan_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bscscan_card_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bscscan_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bscscan_card_type;

    /**
     * Decodes a bscscan_card_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bscscan_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bscscan_card_type;

    /**
     * Verifies a bscscan_card_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bscscan_card_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bscscan_card_type
     */
    public static fromObject(object: { [k: string]: any }): bscscan_card_type;

    /**
     * Creates a plain object from a bscscan_card_type message. Also converts values to other types if specified.
     * @param message bscscan_card_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bscscan_card_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bscscan_card_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a tronscan_type. */
export class tronscan_type implements Itronscan_type {

    /**
     * Constructs a new tronscan_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Itronscan_type);

    /** tronscan_type timestamp. */
    public timestamp: number;

    /** tronscan_type blockNum. */
    public blockNum: number;

    /** tronscan_type blockHash. */
    public blockHash: string;

    /** tronscan_type card. */
    public card: Ibscscan_card_type[];

    /** tronscan_type num. */
    public num: number[];

    /**
     * Creates a new tronscan_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns tronscan_type instance
     */
    public static create(properties?: Itronscan_type): tronscan_type;

    /**
     * Encodes the specified tronscan_type message. Does not implicitly {@link tronscan_type.verify|verify} messages.
     * @param message tronscan_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Itronscan_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified tronscan_type message, length delimited. Does not implicitly {@link tronscan_type.verify|verify} messages.
     * @param message tronscan_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Itronscan_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a tronscan_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns tronscan_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tronscan_type;

    /**
     * Decodes a tronscan_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns tronscan_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tronscan_type;

    /**
     * Verifies a tronscan_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a tronscan_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns tronscan_type
     */
    public static fromObject(object: { [k: string]: any }): tronscan_type;

    /**
     * Creates a plain object from a tronscan_type message. Also converts values to other types if specified.
     * @param message tronscan_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: tronscan_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this tronscan_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a hash_type. */
export class hash_type implements Ihash_type {

    /**
     * Constructs a new hash_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ihash_type);

    /** hash_type cardNum. */
    public cardNum: Ihash_card_num_type[];

    /** hash_type cutIndex. */
    public cutIndex: number;

    /** hash_type card. */
    public card: Ihash_card_type[];

    /** hash_type num. */
    public num: Ihash_card_num_type[];

    /**
     * Creates a new hash_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns hash_type instance
     */
    public static create(properties?: Ihash_type): hash_type;

    /**
     * Encodes the specified hash_type message. Does not implicitly {@link hash_type.verify|verify} messages.
     * @param message hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ihash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified hash_type message, length delimited. Does not implicitly {@link hash_type.verify|verify} messages.
     * @param message hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ihash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a hash_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hash_type;

    /**
     * Decodes a hash_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hash_type;

    /**
     * Verifies a hash_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a hash_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns hash_type
     */
    public static fromObject(object: { [k: string]: any }): hash_type;

    /**
     * Creates a plain object from a hash_type message. Also converts values to other types if specified.
     * @param message hash_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: hash_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this hash_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a crash_common_type. */
export class crash_common_type implements Icrash_common_type {

    /**
     * Constructs a new crash_common_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icrash_common_type);

    /** crash_common_type timestamp. */
    public timestamp: number;

    /** crash_common_type gameNum. */
    public gameNum: (number|Long);

    /** crash_common_type result. */
    public result: number;

    /** crash_common_type resultStr. */
    public resultStr: string;

    /**
     * Creates a new crash_common_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns crash_common_type instance
     */
    public static create(properties?: Icrash_common_type): crash_common_type;

    /**
     * Encodes the specified crash_common_type message. Does not implicitly {@link crash_common_type.verify|verify} messages.
     * @param message crash_common_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icrash_common_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified crash_common_type message, length delimited. Does not implicitly {@link crash_common_type.verify|verify} messages.
     * @param message crash_common_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icrash_common_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a crash_common_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns crash_common_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crash_common_type;

    /**
     * Decodes a crash_common_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns crash_common_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crash_common_type;

    /**
     * Verifies a crash_common_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a crash_common_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns crash_common_type
     */
    public static fromObject(object: { [k: string]: any }): crash_common_type;

    /**
     * Creates a plain object from a crash_common_type message. Also converts values to other types if specified.
     * @param message crash_common_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: crash_common_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this crash_common_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a create_hash_type. */
export class create_hash_type implements Icreate_hash_type {

    /**
     * Constructs a new create_hash_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icreate_hash_type);

    /** create_hash_type gameNum. */
    public gameNum: number;

    /** create_hash_type num. */
    public num: number[];

    /** create_hash_type card. */
    public card: Icreate_hash_card_type[];

    /** create_hash_type seed. */
    public seed: string;

    /**
     * Creates a new create_hash_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns create_hash_type instance
     */
    public static create(properties?: Icreate_hash_type): create_hash_type;

    /**
     * Encodes the specified create_hash_type message. Does not implicitly {@link create_hash_type.verify|verify} messages.
     * @param message create_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icreate_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified create_hash_type message, length delimited. Does not implicitly {@link create_hash_type.verify|verify} messages.
     * @param message create_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icreate_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a create_hash_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns create_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): create_hash_type;

    /**
     * Decodes a create_hash_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns create_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): create_hash_type;

    /**
     * Verifies a create_hash_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a create_hash_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns create_hash_type
     */
    public static fromObject(object: { [k: string]: any }): create_hash_type;

    /**
     * Creates a plain object from a create_hash_type message. Also converts values to other types if specified.
     * @param message create_hash_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: create_hash_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this create_hash_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a create_hash_card_type. */
export class create_hash_card_type implements Icreate_hash_card_type {

    /**
     * Constructs a new create_hash_card_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icreate_hash_card_type);

    /** create_hash_card_type areaId. */
    public areaId: number;

    /** create_hash_card_type cards. */
    public cards: Icard_info[];

    /** create_hash_card_type multi. */
    public multi: number;

    /** create_hash_card_type cardType. */
    public cardType: number;

    /**
     * Creates a new create_hash_card_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns create_hash_card_type instance
     */
    public static create(properties?: Icreate_hash_card_type): create_hash_card_type;

    /**
     * Encodes the specified create_hash_card_type message. Does not implicitly {@link create_hash_card_type.verify|verify} messages.
     * @param message create_hash_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icreate_hash_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified create_hash_card_type message, length delimited. Does not implicitly {@link create_hash_card_type.verify|verify} messages.
     * @param message create_hash_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icreate_hash_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a create_hash_card_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns create_hash_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): create_hash_card_type;

    /**
     * Decodes a create_hash_card_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns create_hash_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): create_hash_card_type;

    /**
     * Verifies a create_hash_card_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a create_hash_card_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns create_hash_card_type
     */
    public static fromObject(object: { [k: string]: any }): create_hash_card_type;

    /**
     * Creates a plain object from a create_hash_card_type message. Also converts values to other types if specified.
     * @param message create_hash_card_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: create_hash_card_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this create_hash_card_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a hash_card_num_type. */
export class hash_card_num_type implements Ihash_card_num_type {

    /**
     * Constructs a new hash_card_num_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ihash_card_num_type);

    /** hash_card_num_type index. */
    public index: number;

    /** hash_card_num_type plaintext. */
    public plaintext: string;

    /** hash_card_num_type ciphertext. */
    public ciphertext: string;

    /** hash_card_num_type point. */
    public point: number;

    /** hash_card_num_type color. */
    public color: number;

    /** hash_card_num_type number. */
    public number: number;

    /**
     * Creates a new hash_card_num_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns hash_card_num_type instance
     */
    public static create(properties?: Ihash_card_num_type): hash_card_num_type;

    /**
     * Encodes the specified hash_card_num_type message. Does not implicitly {@link hash_card_num_type.verify|verify} messages.
     * @param message hash_card_num_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ihash_card_num_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified hash_card_num_type message, length delimited. Does not implicitly {@link hash_card_num_type.verify|verify} messages.
     * @param message hash_card_num_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ihash_card_num_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a hash_card_num_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns hash_card_num_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hash_card_num_type;

    /**
     * Decodes a hash_card_num_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns hash_card_num_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hash_card_num_type;

    /**
     * Verifies a hash_card_num_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a hash_card_num_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns hash_card_num_type
     */
    public static fromObject(object: { [k: string]: any }): hash_card_num_type;

    /**
     * Creates a plain object from a hash_card_num_type message. Also converts values to other types if specified.
     * @param message hash_card_num_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: hash_card_num_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this hash_card_num_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a hash_card_type. */
export class hash_card_type implements Ihash_card_type {

    /**
     * Constructs a new hash_card_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ihash_card_type);

    /** hash_card_type areaId. */
    public areaId: number;

    /** hash_card_type cards. */
    public cards: Ihash_card_num_type[];

    /**
     * Creates a new hash_card_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns hash_card_type instance
     */
    public static create(properties?: Ihash_card_type): hash_card_type;

    /**
     * Encodes the specified hash_card_type message. Does not implicitly {@link hash_card_type.verify|verify} messages.
     * @param message hash_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ihash_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified hash_card_type message, length delimited. Does not implicitly {@link hash_card_type.verify|verify} messages.
     * @param message hash_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ihash_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a hash_card_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns hash_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hash_card_type;

    /**
     * Decodes a hash_card_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns hash_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hash_card_type;

    /**
     * Verifies a hash_card_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a hash_card_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns hash_card_type
     */
    public static fromObject(object: { [k: string]: any }): hash_card_type;

    /**
     * Creates a plain object from a hash_card_type message. Also converts values to other types if specified.
     * @param message hash_card_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: hash_card_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this hash_card_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** qzdz_report_cmd enum. */
export enum qzdz_report_cmd {
    qzCommonDetail = 0,
    qzPlayerDetail = 1
}

/** Represents a msg_qzdz_report_service */
export class msg_qzdz_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_qzdz_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_qzdz_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_qzdz_report_service;
}

/** Represents a qzCommonDetail. */
export class qzCommonDetail implements IqzCommonDetail {

    /**
     * Constructs a new qzCommonDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IqzCommonDetail);

    /** qzCommonDetail playType. */
    public playType: number;

    /** qzCommonDetail roomType. */
    public roomType: number;

    /** qzCommonDetail baseScores. */
    public baseScores: (number|Long);

    /** qzCommonDetail minEnterScores. */
    public minEnterScores: (number|Long);

    /** qzCommonDetail hash. */
    public hash?: (Iqz_hash_type|null);

    /**
     * Creates a new qzCommonDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns qzCommonDetail instance
     */
    public static create(properties?: IqzCommonDetail): qzCommonDetail;

    /**
     * Encodes the specified qzCommonDetail message. Does not implicitly {@link qzCommonDetail.verify|verify} messages.
     * @param message qzCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IqzCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified qzCommonDetail message, length delimited. Does not implicitly {@link qzCommonDetail.verify|verify} messages.
     * @param message qzCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IqzCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a qzCommonDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns qzCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzCommonDetail;

    /**
     * Decodes a qzCommonDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns qzCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzCommonDetail;

    /**
     * Verifies a qzCommonDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a qzCommonDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns qzCommonDetail
     */
    public static fromObject(object: { [k: string]: any }): qzCommonDetail;

    /**
     * Creates a plain object from a qzCommonDetail message. Also converts values to other types if specified.
     * @param message qzCommonDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: qzCommonDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this qzCommonDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a qzPlayerDetail. */
export class qzPlayerDetail implements IqzPlayerDetail {

    /**
     * Constructs a new qzPlayerDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IqzPlayerDetail);

    /** qzPlayerDetail round. */
    public round: Iround_type[];

    /**
     * Creates a new qzPlayerDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns qzPlayerDetail instance
     */
    public static create(properties?: IqzPlayerDetail): qzPlayerDetail;

    /**
     * Encodes the specified qzPlayerDetail message. Does not implicitly {@link qzPlayerDetail.verify|verify} messages.
     * @param message qzPlayerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IqzPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified qzPlayerDetail message, length delimited. Does not implicitly {@link qzPlayerDetail.verify|verify} messages.
     * @param message qzPlayerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IqzPlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a qzPlayerDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns qzPlayerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzPlayerDetail;

    /**
     * Decodes a qzPlayerDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns qzPlayerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzPlayerDetail;

    /**
     * Verifies a qzPlayerDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a qzPlayerDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns qzPlayerDetail
     */
    public static fromObject(object: { [k: string]: any }): qzPlayerDetail;

    /**
     * Creates a plain object from a qzPlayerDetail message. Also converts values to other types if specified.
     * @param message qzPlayerDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: qzPlayerDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this qzPlayerDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a round_type. */
export class round_type implements Iround_type {

    /**
     * Constructs a new round_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iround_type);

    /** round_type detail. */
    public detail: Iplayer_qz_detail_type[];

    /**
     * Creates a new round_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns round_type instance
     */
    public static create(properties?: Iround_type): round_type;

    /**
     * Encodes the specified round_type message. Does not implicitly {@link round_type.verify|verify} messages.
     * @param message round_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iround_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified round_type message, length delimited. Does not implicitly {@link round_type.verify|verify} messages.
     * @param message round_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iround_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a round_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns round_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): round_type;

    /**
     * Decodes a round_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns round_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): round_type;

    /**
     * Verifies a round_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a round_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns round_type
     */
    public static fromObject(object: { [k: string]: any }): round_type;

    /**
     * Creates a plain object from a round_type message. Also converts values to other types if specified.
     * @param message round_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: round_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this round_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a player_qz_detail_type. */
export class player_qz_detail_type implements Iplayer_qz_detail_type {

    /**
     * Constructs a new player_qz_detail_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iplayer_qz_detail_type);

    /** player_qz_detail_type pos. */
    public pos: number;

    /** player_qz_detail_type userName. */
    public userName: string;

    /** player_qz_detail_type isSelf. */
    public isSelf: boolean;

    /** player_qz_detail_type isBanker. */
    public isBanker: boolean;

    /** player_qz_detail_type scrambleMulti. */
    public scrambleMulti: number;

    /** player_qz_detail_type betMulti. */
    public betMulti: number;

    /** player_qz_detail_type cards. */
    public cards: Iqz_card_info[];

    /** player_qz_detail_type othersCards. */
    public othersCards: Iqz_card_info[];

    /** player_qz_detail_type cardType. */
    public cardType: number;

    /** player_qz_detail_type eliminateType. */
    public eliminateType: number;

    /** player_qz_detail_type isWin. */
    public isWin: boolean;

    /** player_qz_detail_type profit. */
    public profit: (number|Long);

    /**
     * Creates a new player_qz_detail_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns player_qz_detail_type instance
     */
    public static create(properties?: Iplayer_qz_detail_type): player_qz_detail_type;

    /**
     * Encodes the specified player_qz_detail_type message. Does not implicitly {@link player_qz_detail_type.verify|verify} messages.
     * @param message player_qz_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iplayer_qz_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified player_qz_detail_type message, length delimited. Does not implicitly {@link player_qz_detail_type.verify|verify} messages.
     * @param message player_qz_detail_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iplayer_qz_detail_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a player_qz_detail_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns player_qz_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): player_qz_detail_type;

    /**
     * Decodes a player_qz_detail_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns player_qz_detail_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): player_qz_detail_type;

    /**
     * Verifies a player_qz_detail_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a player_qz_detail_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns player_qz_detail_type
     */
    public static fromObject(object: { [k: string]: any }): player_qz_detail_type;

    /**
     * Creates a plain object from a player_qz_detail_type message. Also converts values to other types if specified.
     * @param message player_qz_detail_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: player_qz_detail_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this player_qz_detail_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a qz_card_info. */
export class qz_card_info implements Iqz_card_info {

    /**
     * Constructs a new qz_card_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iqz_card_info);

    /** qz_card_info point. */
    public point: number;

    /** qz_card_info color. */
    public color: number;

    /** qz_card_info number1. */
    public number1: number;

    /** qz_card_info number2. */
    public number2: number;

    /**
     * Creates a new qz_card_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns qz_card_info instance
     */
    public static create(properties?: Iqz_card_info): qz_card_info;

    /**
     * Encodes the specified qz_card_info message. Does not implicitly {@link qz_card_info.verify|verify} messages.
     * @param message qz_card_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iqz_card_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified qz_card_info message, length delimited. Does not implicitly {@link qz_card_info.verify|verify} messages.
     * @param message qz_card_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iqz_card_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a qz_card_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns qz_card_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qz_card_info;

    /**
     * Decodes a qz_card_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns qz_card_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qz_card_info;

    /**
     * Verifies a qz_card_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a qz_card_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns qz_card_info
     */
    public static fromObject(object: { [k: string]: any }): qz_card_info;

    /**
     * Creates a plain object from a qz_card_info message. Also converts values to other types if specified.
     * @param message qz_card_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: qz_card_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this qz_card_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a qz_hash_type. */
export class qz_hash_type implements Iqz_hash_type {

    /**
     * Constructs a new qz_hash_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iqz_hash_type);

    /** qz_hash_type cards. */
    public cards: Iqz_hash_card_info[];

    /** qz_hash_type cutIndex. */
    public cutIndex: number;

    /**
     * Creates a new qz_hash_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns qz_hash_type instance
     */
    public static create(properties?: Iqz_hash_type): qz_hash_type;

    /**
     * Encodes the specified qz_hash_type message. Does not implicitly {@link qz_hash_type.verify|verify} messages.
     * @param message qz_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iqz_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified qz_hash_type message, length delimited. Does not implicitly {@link qz_hash_type.verify|verify} messages.
     * @param message qz_hash_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iqz_hash_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a qz_hash_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns qz_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qz_hash_type;

    /**
     * Decodes a qz_hash_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns qz_hash_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qz_hash_type;

    /**
     * Verifies a qz_hash_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a qz_hash_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns qz_hash_type
     */
    public static fromObject(object: { [k: string]: any }): qz_hash_type;

    /**
     * Creates a plain object from a qz_hash_type message. Also converts values to other types if specified.
     * @param message qz_hash_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: qz_hash_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this qz_hash_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a qz_hash_card_info. */
export class qz_hash_card_info implements Iqz_hash_card_info {

    /**
     * Constructs a new qz_hash_card_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iqz_hash_card_info);

    /** qz_hash_card_info index. */
    public index: number;

    /** qz_hash_card_info plaintext. */
    public plaintext: string;

    /** qz_hash_card_info ciphertext. */
    public ciphertext: string;

    /** qz_hash_card_info point. */
    public point: number;

    /** qz_hash_card_info color. */
    public color: number;

    /**
     * Creates a new qz_hash_card_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns qz_hash_card_info instance
     */
    public static create(properties?: Iqz_hash_card_info): qz_hash_card_info;

    /**
     * Encodes the specified qz_hash_card_info message. Does not implicitly {@link qz_hash_card_info.verify|verify} messages.
     * @param message qz_hash_card_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iqz_hash_card_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified qz_hash_card_info message, length delimited. Does not implicitly {@link qz_hash_card_info.verify|verify} messages.
     * @param message qz_hash_card_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iqz_hash_card_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a qz_hash_card_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns qz_hash_card_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qz_hash_card_info;

    /**
     * Decodes a qz_hash_card_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns qz_hash_card_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qz_hash_card_info;

    /**
     * Verifies a qz_hash_card_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a qz_hash_card_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns qz_hash_card_info
     */
    public static fromObject(object: { [k: string]: any }): qz_hash_card_info;

    /**
     * Creates a plain object from a qz_hash_card_info message. Also converts values to other types if specified.
     * @param message qz_hash_card_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: qz_hash_card_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this qz_hash_card_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** msg_state enum. */
export enum msg_state {
    return = 1,
    win = 2,
    lose = 3
}

/** Represents a common_card_type. */
export class common_card_type implements Icommon_card_type {

    /**
     * Constructs a new common_card_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icommon_card_type);

    /** common_card_type areaId. */
    public areaId: number;

    /** common_card_type cards. */
    public cards: Icard_info[];

    /** common_card_type multi. */
    public multi: number;

    /** common_card_type cardType. */
    public cardType: number;

    /**
     * Creates a new common_card_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns common_card_type instance
     */
    public static create(properties?: Icommon_card_type): common_card_type;

    /**
     * Encodes the specified common_card_type message. Does not implicitly {@link common_card_type.verify|verify} messages.
     * @param message common_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icommon_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified common_card_type message, length delimited. Does not implicitly {@link common_card_type.verify|verify} messages.
     * @param message common_card_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icommon_card_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a common_card_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns common_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common_card_type;

    /**
     * Decodes a common_card_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns common_card_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common_card_type;

    /**
     * Verifies a common_card_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a common_card_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns common_card_type
     */
    public static fromObject(object: { [k: string]: any }): common_card_type;

    /**
     * Creates a plain object from a common_card_type message. Also converts values to other types if specified.
     * @param message common_card_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: common_card_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this common_card_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a card_info. */
export class card_info implements Icard_info {

    /**
     * Constructs a new card_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Icard_info);

    /** card_info point. */
    public point: number;

    /** card_info color. */
    public color: number;

    /**
     * Creates a new card_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns card_info instance
     */
    public static create(properties?: Icard_info): card_info;

    /**
     * Encodes the specified card_info message. Does not implicitly {@link card_info.verify|verify} messages.
     * @param message card_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Icard_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified card_info message, length delimited. Does not implicitly {@link card_info.verify|verify} messages.
     * @param message card_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Icard_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a card_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns card_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): card_info;

    /**
     * Decodes a card_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns card_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): card_info;

    /**
     * Verifies a card_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a card_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns card_info
     */
    public static fromObject(object: { [k: string]: any }): card_info;

    /**
     * Creates a plain object from a card_info message. Also converts values to other types if specified.
     * @param message card_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: card_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this card_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** single_report_cmd enum. */
export enum single_report_cmd {
    singleCommonDetail = 0,
    singlePlayerDetail = 1
}

/** Represents a msg_single_report_service */
export class msg_single_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_single_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_single_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_single_report_service;
}

/** Represents a singleCommonDetail. */
export class singleCommonDetail implements IsingleCommonDetail {

    /**
     * Constructs a new singleCommonDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsingleCommonDetail);

    /** singleCommonDetail seizeTreasure. */
    public seizeTreasure?: (Iseize_treasure_common_type|null);

    /**
     * Creates a new singleCommonDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns singleCommonDetail instance
     */
    public static create(properties?: IsingleCommonDetail): singleCommonDetail;

    /**
     * Encodes the specified singleCommonDetail message. Does not implicitly {@link singleCommonDetail.verify|verify} messages.
     * @param message singleCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsingleCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified singleCommonDetail message, length delimited. Does not implicitly {@link singleCommonDetail.verify|verify} messages.
     * @param message singleCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IsingleCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a singleCommonDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns singleCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): singleCommonDetail;

    /**
     * Decodes a singleCommonDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns singleCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): singleCommonDetail;

    /**
     * Verifies a singleCommonDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a singleCommonDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns singleCommonDetail
     */
    public static fromObject(object: { [k: string]: any }): singleCommonDetail;

    /**
     * Creates a plain object from a singleCommonDetail message. Also converts values to other types if specified.
     * @param message singleCommonDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: singleCommonDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this singleCommonDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a singlePlayerDetail. */
export class singlePlayerDetail implements IsinglePlayerDetail {

    /**
     * Constructs a new singlePlayerDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IsinglePlayerDetail);

    /** singlePlayerDetail seizeTreasure. */
    public seizeTreasure?: (Iseize_treasure_player_type|null);

    /**
     * Creates a new singlePlayerDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns singlePlayerDetail instance
     */
    public static create(properties?: IsinglePlayerDetail): singlePlayerDetail;

    /**
     * Encodes the specified singlePlayerDetail message. Does not implicitly {@link singlePlayerDetail.verify|verify} messages.
     * @param message singlePlayerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IsinglePlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified singlePlayerDetail message, length delimited. Does not implicitly {@link singlePlayerDetail.verify|verify} messages.
     * @param message singlePlayerDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IsinglePlayerDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a singlePlayerDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns singlePlayerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): singlePlayerDetail;

    /**
     * Decodes a singlePlayerDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns singlePlayerDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): singlePlayerDetail;

    /**
     * Verifies a singlePlayerDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a singlePlayerDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns singlePlayerDetail
     */
    public static fromObject(object: { [k: string]: any }): singlePlayerDetail;

    /**
     * Creates a plain object from a singlePlayerDetail message. Also converts values to other types if specified.
     * @param message singlePlayerDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: singlePlayerDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this singlePlayerDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a seize_treasure_common_type. */
export class seize_treasure_common_type implements Iseize_treasure_common_type {

    /**
     * Constructs a new seize_treasure_common_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iseize_treasure_common_type);

    /** seize_treasure_common_type seizeTreasureId. */
    public seizeTreasureId: string;

    /** seize_treasure_common_type goodsId. */
    public goodsId: string;

    /** seize_treasure_common_type issue. */
    public issue: string;

    /** seize_treasure_common_type total. */
    public total: number;

    /** seize_treasure_common_type time. */
    public time: (number|Long);

    /** seize_treasure_common_type winCode. */
    public winCode: (number|Long);

    /**
     * Creates a new seize_treasure_common_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns seize_treasure_common_type instance
     */
    public static create(properties?: Iseize_treasure_common_type): seize_treasure_common_type;

    /**
     * Encodes the specified seize_treasure_common_type message. Does not implicitly {@link seize_treasure_common_type.verify|verify} messages.
     * @param message seize_treasure_common_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iseize_treasure_common_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified seize_treasure_common_type message, length delimited. Does not implicitly {@link seize_treasure_common_type.verify|verify} messages.
     * @param message seize_treasure_common_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iseize_treasure_common_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a seize_treasure_common_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns seize_treasure_common_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): seize_treasure_common_type;

    /**
     * Decodes a seize_treasure_common_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns seize_treasure_common_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): seize_treasure_common_type;

    /**
     * Verifies a seize_treasure_common_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a seize_treasure_common_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns seize_treasure_common_type
     */
    public static fromObject(object: { [k: string]: any }): seize_treasure_common_type;

    /**
     * Creates a plain object from a seize_treasure_common_type message. Also converts values to other types if specified.
     * @param message seize_treasure_common_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: seize_treasure_common_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this seize_treasure_common_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a seize_treasure_player_type. */
export class seize_treasure_player_type implements Iseize_treasure_player_type {

    /**
     * Constructs a new seize_treasure_player_type.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iseize_treasure_player_type);

    /** seize_treasure_player_type betScores. */
    public betScores: number;

    /** seize_treasure_player_type betTime. */
    public betTime: (number|Long);

    /** seize_treasure_player_type state. */
    public state: msg_state;

    /** seize_treasure_player_type codeList. */
    public codeList: (number|Long)[];

    /**
     * Creates a new seize_treasure_player_type instance using the specified properties.
     * @param [properties] Properties to set
     * @returns seize_treasure_player_type instance
     */
    public static create(properties?: Iseize_treasure_player_type): seize_treasure_player_type;

    /**
     * Encodes the specified seize_treasure_player_type message. Does not implicitly {@link seize_treasure_player_type.verify|verify} messages.
     * @param message seize_treasure_player_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iseize_treasure_player_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified seize_treasure_player_type message, length delimited. Does not implicitly {@link seize_treasure_player_type.verify|verify} messages.
     * @param message seize_treasure_player_type message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iseize_treasure_player_type, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a seize_treasure_player_type message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns seize_treasure_player_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): seize_treasure_player_type;

    /**
     * Decodes a seize_treasure_player_type message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns seize_treasure_player_type
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): seize_treasure_player_type;

    /**
     * Verifies a seize_treasure_player_type message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a seize_treasure_player_type message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns seize_treasure_player_type
     */
    public static fromObject(object: { [k: string]: any }): seize_treasure_player_type;

    /**
     * Creates a plain object from a seize_treasure_player_type message. Also converts values to other types if specified.
     * @param message seize_treasure_player_type
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: seize_treasure_player_type, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this seize_treasure_player_type to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** slot_report_cmd enum. */
export enum slot_report_cmd {
    normalSpinDetail = 0,
    littleGameDetail = 1,
    freeSpinDetail = 2,
    buyFreeGameDetail = 3,
    slotCommonDetail = 4,
    doubleCoinDetail = 5,
    bingoNormalDetail = 6,
    bingoFreeDetail = 7,
    bingoLittleGameDetail = 8
}

/** Represents a msg_slot_report_service */
export class msg_slot_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_slot_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_slot_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_slot_report_service;
}

/** Represents a normalSpinDetail. */
export class normalSpinDetail implements InormalSpinDetail {

    /**
     * Constructs a new normalSpinDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: InormalSpinDetail);

    /** normalSpinDetail detail. */
    public detail: IdetailSlotType;

    /** normalSpinDetail taskList. */
    public taskList: ItaskListType[];

    /**
     * Creates a new normalSpinDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns normalSpinDetail instance
     */
    public static create(properties?: InormalSpinDetail): normalSpinDetail;

    /**
     * Encodes the specified normalSpinDetail message. Does not implicitly {@link normalSpinDetail.verify|verify} messages.
     * @param message normalSpinDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: InormalSpinDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified normalSpinDetail message, length delimited. Does not implicitly {@link normalSpinDetail.verify|verify} messages.
     * @param message normalSpinDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: InormalSpinDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a normalSpinDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns normalSpinDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): normalSpinDetail;

    /**
     * Decodes a normalSpinDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns normalSpinDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): normalSpinDetail;

    /**
     * Verifies a normalSpinDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a normalSpinDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns normalSpinDetail
     */
    public static fromObject(object: { [k: string]: any }): normalSpinDetail;

    /**
     * Creates a plain object from a normalSpinDetail message. Also converts values to other types if specified.
     * @param message normalSpinDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: normalSpinDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this normalSpinDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a littleGameDetail. */
export class littleGameDetail implements IlittleGameDetail {

    /**
     * Constructs a new littleGameDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IlittleGameDetail);

    /** littleGameDetail detail. */
    public detail: IlgDetailType;

    /**
     * Creates a new littleGameDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns littleGameDetail instance
     */
    public static create(properties?: IlittleGameDetail): littleGameDetail;

    /**
     * Encodes the specified littleGameDetail message. Does not implicitly {@link littleGameDetail.verify|verify} messages.
     * @param message littleGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IlittleGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified littleGameDetail message, length delimited. Does not implicitly {@link littleGameDetail.verify|verify} messages.
     * @param message littleGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IlittleGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a littleGameDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns littleGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): littleGameDetail;

    /**
     * Decodes a littleGameDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns littleGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): littleGameDetail;

    /**
     * Verifies a littleGameDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a littleGameDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns littleGameDetail
     */
    public static fromObject(object: { [k: string]: any }): littleGameDetail;

    /**
     * Creates a plain object from a littleGameDetail message. Also converts values to other types if specified.
     * @param message littleGameDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: littleGameDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this littleGameDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a freeSpinDetail. */
export class freeSpinDetail implements IfreeSpinDetail {

    /**
     * Constructs a new freeSpinDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IfreeSpinDetail);

    /** freeSpinDetail detail. */
    public detail: IdetailSlotType;

    /** freeSpinDetail times. */
    public times: number;

    /** freeSpinDetail wild. */
    public wild: number[];

    /** freeSpinDetail scatter. */
    public scatter: number[];

    /** freeSpinDetail currentGameId. */
    public currentGameId: number;

    /** freeSpinDetail taskList. */
    public taskList: ItaskListType[];

    /**
     * Creates a new freeSpinDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns freeSpinDetail instance
     */
    public static create(properties?: IfreeSpinDetail): freeSpinDetail;

    /**
     * Encodes the specified freeSpinDetail message. Does not implicitly {@link freeSpinDetail.verify|verify} messages.
     * @param message freeSpinDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IfreeSpinDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified freeSpinDetail message, length delimited. Does not implicitly {@link freeSpinDetail.verify|verify} messages.
     * @param message freeSpinDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IfreeSpinDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a freeSpinDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns freeSpinDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): freeSpinDetail;

    /**
     * Decodes a freeSpinDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns freeSpinDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): freeSpinDetail;

    /**
     * Verifies a freeSpinDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a freeSpinDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns freeSpinDetail
     */
    public static fromObject(object: { [k: string]: any }): freeSpinDetail;

    /**
     * Creates a plain object from a freeSpinDetail message. Also converts values to other types if specified.
     * @param message freeSpinDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: freeSpinDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this freeSpinDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a buyFreeGameDetail. */
export class buyFreeGameDetail implements IbuyFreeGameDetail {

    /**
     * Constructs a new buyFreeGameDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbuyFreeGameDetail);

    /** buyFreeGameDetail detail. */
    public detail: IbfgDetailType;

    /**
     * Creates a new buyFreeGameDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns buyFreeGameDetail instance
     */
    public static create(properties?: IbuyFreeGameDetail): buyFreeGameDetail;

    /**
     * Encodes the specified buyFreeGameDetail message. Does not implicitly {@link buyFreeGameDetail.verify|verify} messages.
     * @param message buyFreeGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbuyFreeGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified buyFreeGameDetail message, length delimited. Does not implicitly {@link buyFreeGameDetail.verify|verify} messages.
     * @param message buyFreeGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbuyFreeGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a buyFreeGameDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns buyFreeGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): buyFreeGameDetail;

    /**
     * Decodes a buyFreeGameDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns buyFreeGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): buyFreeGameDetail;

    /**
     * Verifies a buyFreeGameDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a buyFreeGameDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns buyFreeGameDetail
     */
    public static fromObject(object: { [k: string]: any }): buyFreeGameDetail;

    /**
     * Creates a plain object from a buyFreeGameDetail message. Also converts values to other types if specified.
     * @param message buyFreeGameDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: buyFreeGameDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this buyFreeGameDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a doubleCoinDetail. */
export class doubleCoinDetail implements IdoubleCoinDetail {

    /**
     * Constructs a new doubleCoinDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IdoubleCoinDetail);

    /** doubleCoinDetail detail. */
    public detail: IdoubleCoinDetailType;

    /** doubleCoinDetail hash. */
    public hash?: (IdoubleCoinHashType|null);

    /**
     * Creates a new doubleCoinDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns doubleCoinDetail instance
     */
    public static create(properties?: IdoubleCoinDetail): doubleCoinDetail;

    /**
     * Encodes the specified doubleCoinDetail message. Does not implicitly {@link doubleCoinDetail.verify|verify} messages.
     * @param message doubleCoinDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IdoubleCoinDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified doubleCoinDetail message, length delimited. Does not implicitly {@link doubleCoinDetail.verify|verify} messages.
     * @param message doubleCoinDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IdoubleCoinDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a doubleCoinDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns doubleCoinDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): doubleCoinDetail;

    /**
     * Decodes a doubleCoinDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns doubleCoinDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): doubleCoinDetail;

    /**
     * Verifies a doubleCoinDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a doubleCoinDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns doubleCoinDetail
     */
    public static fromObject(object: { [k: string]: any }): doubleCoinDetail;

    /**
     * Creates a plain object from a doubleCoinDetail message. Also converts values to other types if specified.
     * @param message doubleCoinDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: doubleCoinDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this doubleCoinDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bingoNormalDetail. */
export class bingoNormalDetail implements IbingoNormalDetail {

    /**
     * Constructs a new bingoNormalDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbingoNormalDetail);

    /** bingoNormalDetail detail. */
    public detail: IdetailBingoType;

    /**
     * Creates a new bingoNormalDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bingoNormalDetail instance
     */
    public static create(properties?: IbingoNormalDetail): bingoNormalDetail;

    /**
     * Encodes the specified bingoNormalDetail message. Does not implicitly {@link bingoNormalDetail.verify|verify} messages.
     * @param message bingoNormalDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbingoNormalDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bingoNormalDetail message, length delimited. Does not implicitly {@link bingoNormalDetail.verify|verify} messages.
     * @param message bingoNormalDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbingoNormalDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bingoNormalDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bingoNormalDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoNormalDetail;

    /**
     * Decodes a bingoNormalDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bingoNormalDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoNormalDetail;

    /**
     * Verifies a bingoNormalDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bingoNormalDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bingoNormalDetail
     */
    public static fromObject(object: { [k: string]: any }): bingoNormalDetail;

    /**
     * Creates a plain object from a bingoNormalDetail message. Also converts values to other types if specified.
     * @param message bingoNormalDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bingoNormalDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bingoNormalDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bingoFreeDetail. */
export class bingoFreeDetail implements IbingoFreeDetail {

    /**
     * Constructs a new bingoFreeDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbingoFreeDetail);

    /** bingoFreeDetail detail. */
    public detail: IdetailBingoType;

    /**
     * Creates a new bingoFreeDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bingoFreeDetail instance
     */
    public static create(properties?: IbingoFreeDetail): bingoFreeDetail;

    /**
     * Encodes the specified bingoFreeDetail message. Does not implicitly {@link bingoFreeDetail.verify|verify} messages.
     * @param message bingoFreeDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbingoFreeDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bingoFreeDetail message, length delimited. Does not implicitly {@link bingoFreeDetail.verify|verify} messages.
     * @param message bingoFreeDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbingoFreeDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bingoFreeDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bingoFreeDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoFreeDetail;

    /**
     * Decodes a bingoFreeDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bingoFreeDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoFreeDetail;

    /**
     * Verifies a bingoFreeDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bingoFreeDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bingoFreeDetail
     */
    public static fromObject(object: { [k: string]: any }): bingoFreeDetail;

    /**
     * Creates a plain object from a bingoFreeDetail message. Also converts values to other types if specified.
     * @param message bingoFreeDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bingoFreeDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bingoFreeDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bingoLittleGameDetail. */
export class bingoLittleGameDetail implements IbingoLittleGameDetail {

    /**
     * Constructs a new bingoLittleGameDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbingoLittleGameDetail);

    /** bingoLittleGameDetail detail. */
    public detail: IbingoLgDetailType;

    /**
     * Creates a new bingoLittleGameDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bingoLittleGameDetail instance
     */
    public static create(properties?: IbingoLittleGameDetail): bingoLittleGameDetail;

    /**
     * Encodes the specified bingoLittleGameDetail message. Does not implicitly {@link bingoLittleGameDetail.verify|verify} messages.
     * @param message bingoLittleGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbingoLittleGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bingoLittleGameDetail message, length delimited. Does not implicitly {@link bingoLittleGameDetail.verify|verify} messages.
     * @param message bingoLittleGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbingoLittleGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bingoLittleGameDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bingoLittleGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoLittleGameDetail;

    /**
     * Decodes a bingoLittleGameDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bingoLittleGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoLittleGameDetail;

    /**
     * Verifies a bingoLittleGameDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bingoLittleGameDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bingoLittleGameDetail
     */
    public static fromObject(object: { [k: string]: any }): bingoLittleGameDetail;

    /**
     * Creates a plain object from a bingoLittleGameDetail message. Also converts values to other types if specified.
     * @param message bingoLittleGameDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bingoLittleGameDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bingoLittleGameDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a slotCommonDetail. */
export class slotCommonDetail implements IslotCommonDetail {

    /**
     * Constructs a new slotCommonDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IslotCommonDetail);

    /** slotCommonDetail roundId. */
    public roundId: (number|Long);

    /** slotCommonDetail gameMod. */
    public gameMod: number;

    /** slotCommonDetail plaintext. */
    public plaintext: string;

    /** slotCommonDetail ciphertext. */
    public ciphertext: string;

    /** slotCommonDetail rollerId. */
    public rollerId: number;

    /** slotCommonDetail timestamp. */
    public timestamp: string;

    /** slotCommonDetail rollerModeId. */
    public rollerModeId: number;

    /** slotCommonDetail rollerGameId. */
    public rollerGameId: (number|Long);

    /** slotCommonDetail rollerAddElem. */
    public rollerAddElem: slotCommonDetail.IrollerAddElemType[];

    /** slotCommonDetail rollerDelElem. */
    public rollerDelElem: number[];

    /**
     * Creates a new slotCommonDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns slotCommonDetail instance
     */
    public static create(properties?: IslotCommonDetail): slotCommonDetail;

    /**
     * Encodes the specified slotCommonDetail message. Does not implicitly {@link slotCommonDetail.verify|verify} messages.
     * @param message slotCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IslotCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified slotCommonDetail message, length delimited. Does not implicitly {@link slotCommonDetail.verify|verify} messages.
     * @param message slotCommonDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IslotCommonDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a slotCommonDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns slotCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slotCommonDetail;

    /**
     * Decodes a slotCommonDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns slotCommonDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slotCommonDetail;

    /**
     * Verifies a slotCommonDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a slotCommonDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns slotCommonDetail
     */
    public static fromObject(object: { [k: string]: any }): slotCommonDetail;

    /**
     * Creates a plain object from a slotCommonDetail message. Also converts values to other types if specified.
     * @param message slotCommonDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: slotCommonDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this slotCommonDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace slotCommonDetail {

    /** Properties of a rollerAddElemType. */
    interface IrollerAddElemType {

        /** rollerAddElemType column */
        column: number;

        /** rollerAddElemType elemList */
        elemList?: (number[]|null);
    }

    /** Represents a rollerAddElemType. */
    class rollerAddElemType implements IrollerAddElemType {

        /**
         * Constructs a new rollerAddElemType.
         * @param [properties] Properties to set
         */
        constructor(properties?: slotCommonDetail.IrollerAddElemType);

        /** rollerAddElemType column. */
        public column: number;

        /** rollerAddElemType elemList. */
        public elemList: number[];

        /**
         * Creates a new rollerAddElemType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns rollerAddElemType instance
         */
        public static create(properties?: slotCommonDetail.IrollerAddElemType): slotCommonDetail.rollerAddElemType;

        /**
         * Encodes the specified rollerAddElemType message. Does not implicitly {@link slotCommonDetail.rollerAddElemType.verify|verify} messages.
         * @param message rollerAddElemType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: slotCommonDetail.IrollerAddElemType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified rollerAddElemType message, length delimited. Does not implicitly {@link slotCommonDetail.rollerAddElemType.verify|verify} messages.
         * @param message rollerAddElemType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: slotCommonDetail.IrollerAddElemType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a rollerAddElemType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns rollerAddElemType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): slotCommonDetail.rollerAddElemType;

        /**
         * Decodes a rollerAddElemType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns rollerAddElemType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): slotCommonDetail.rollerAddElemType;

        /**
         * Verifies a rollerAddElemType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a rollerAddElemType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns rollerAddElemType
         */
        public static fromObject(object: { [k: string]: any }): slotCommonDetail.rollerAddElemType;

        /**
         * Creates a plain object from a rollerAddElemType message. Also converts values to other types if specified.
         * @param message rollerAddElemType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: slotCommonDetail.rollerAddElemType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this rollerAddElemType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents a detailSlotType. */
export class detailSlotType implements IdetailSlotType {

    /**
     * Constructs a new detailSlotType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IdetailSlotType);

    /** detailSlotType lineCost. */
    public lineCost: (number|Long);

    /** detailSlotType lineRate. */
    public lineRate: number;

    /** detailSlotType lineNum. */
    public lineNum: number;

    /** detailSlotType isAllLines. */
    public isAllLines: number;

    /** detailSlotType grid. */
    public grid: number[];

    /** detailSlotType gridShow. */
    public gridShow: IgridShowType[];

    /** detailSlotType lineResult. */
    public lineResult: IlineResultType[];

    /** detailSlotType scatterResult. */
    public scatterResult: IscatterResultType[];

    /** detailSlotType fullLineResult. */
    public fullLineResult: IfullLineResultType[];

    /** detailSlotType crushLineResult. */
    public crushLineResult: IcrushLineResultType[];

    /** detailSlotType crushFullLineResult. */
    public crushFullLineResult: IcrushLineResultType[];

    /** detailSlotType activeElemLineResult. */
    public activeElemLineResult: IactiveElemLineResultType[];

    /** detailSlotType attachList. */
    public attachList: IattachListType[];

    /** detailSlotType gridRate. */
    public gridRate: IgridRateType[];

    /** detailSlotType rollerLv. */
    public rollerLv: number;

    /** detailSlotType goldRandomReward. */
    public goldRandomReward: IgoldRandomRewardType[];

    /** detailSlotType allActiveLineList. */
    public allActiveLineList: IallActiveLineListType[];

    /** detailSlotType moveLineResult. */
    public moveLineResult: ImoveLineResultType[];

    /** detailSlotType lineMultiple. */
    public lineMultiple: number;

    /** detailSlotType extraRoller. */
    public extraRoller: IextraRollerType[];

    /** detailSlotType randomGridType. */
    public randomGridType: number;

    /** detailSlotType realGridShow. */
    public realGridShow: IgridShowType[];

    /**
     * Creates a new detailSlotType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns detailSlotType instance
     */
    public static create(properties?: IdetailSlotType): detailSlotType;

    /**
     * Encodes the specified detailSlotType message. Does not implicitly {@link detailSlotType.verify|verify} messages.
     * @param message detailSlotType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IdetailSlotType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified detailSlotType message, length delimited. Does not implicitly {@link detailSlotType.verify|verify} messages.
     * @param message detailSlotType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IdetailSlotType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a detailSlotType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns detailSlotType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): detailSlotType;

    /**
     * Decodes a detailSlotType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns detailSlotType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): detailSlotType;

    /**
     * Verifies a detailSlotType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a detailSlotType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns detailSlotType
     */
    public static fromObject(object: { [k: string]: any }): detailSlotType;

    /**
     * Creates a plain object from a detailSlotType message. Also converts values to other types if specified.
     * @param message detailSlotType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: detailSlotType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this detailSlotType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a detailBingoType. */
export class detailBingoType implements IdetailBingoType {

    /**
     * Constructs a new detailBingoType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IdetailBingoType);

    /** detailBingoType gridShow. */
    public gridShow: IgridShowType[];

    /** detailBingoType bingoResult. */
    public bingoResult?: (IbingoResultType|null);

    /**
     * Creates a new detailBingoType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns detailBingoType instance
     */
    public static create(properties?: IdetailBingoType): detailBingoType;

    /**
     * Encodes the specified detailBingoType message. Does not implicitly {@link detailBingoType.verify|verify} messages.
     * @param message detailBingoType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IdetailBingoType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified detailBingoType message, length delimited. Does not implicitly {@link detailBingoType.verify|verify} messages.
     * @param message detailBingoType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IdetailBingoType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a detailBingoType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns detailBingoType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): detailBingoType;

    /**
     * Decodes a detailBingoType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns detailBingoType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): detailBingoType;

    /**
     * Verifies a detailBingoType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a detailBingoType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns detailBingoType
     */
    public static fromObject(object: { [k: string]: any }): detailBingoType;

    /**
     * Creates a plain object from a detailBingoType message. Also converts values to other types if specified.
     * @param message detailBingoType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: detailBingoType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this detailBingoType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lineResultType. */
export class lineResultType implements IlineResultType {

    /**
     * Constructs a new lineResultType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IlineResultType);

    /** lineResultType lineId. */
    public lineId: number;

    /** lineResultType scores. */
    public scores: (number|Long);

    /** lineResultType rate. */
    public rate: number;

    /** lineResultType dir. */
    public dir: number;

    /** lineResultType lineMode. */
    public lineMode: number;

    /** lineResultType lineType. */
    public lineType: number;

    /** lineResultType elemList. */
    public elemList: number[];

    /** lineResultType elemRate. */
    public elemRate: number;

    /** lineResultType number. */
    public number: number;

    /**
     * Creates a new lineResultType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lineResultType instance
     */
    public static create(properties?: IlineResultType): lineResultType;

    /**
     * Encodes the specified lineResultType message. Does not implicitly {@link lineResultType.verify|verify} messages.
     * @param message lineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IlineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lineResultType message, length delimited. Does not implicitly {@link lineResultType.verify|verify} messages.
     * @param message lineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IlineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lineResultType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lineResultType;

    /**
     * Decodes a lineResultType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lineResultType;

    /**
     * Verifies a lineResultType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lineResultType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lineResultType
     */
    public static fromObject(object: { [k: string]: any }): lineResultType;

    /**
     * Creates a plain object from a lineResultType message. Also converts values to other types if specified.
     * @param message lineResultType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lineResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lineResultType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a lgDetailType. */
export class lgDetailType implements IlgDetailType {

    /**
     * Constructs a new lgDetailType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IlgDetailType);

    /** lgDetailType rgProcess. */
    public rgProcess: IrgProcessType[];

    /**
     * Creates a new lgDetailType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns lgDetailType instance
     */
    public static create(properties?: IlgDetailType): lgDetailType;

    /**
     * Encodes the specified lgDetailType message. Does not implicitly {@link lgDetailType.verify|verify} messages.
     * @param message lgDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IlgDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified lgDetailType message, length delimited. Does not implicitly {@link lgDetailType.verify|verify} messages.
     * @param message lgDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IlgDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a lgDetailType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns lgDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lgDetailType;

    /**
     * Decodes a lgDetailType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns lgDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lgDetailType;

    /**
     * Verifies a lgDetailType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a lgDetailType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns lgDetailType
     */
    public static fromObject(object: { [k: string]: any }): lgDetailType;

    /**
     * Creates a plain object from a lgDetailType message. Also converts values to other types if specified.
     * @param message lgDetailType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: lgDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this lgDetailType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a rgProcessType. */
export class rgProcessType implements IrgProcessType {

    /**
     * Constructs a new rgProcessType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrgProcessType);

    /** rgProcessType sceneId. */
    public sceneId: number;

    /** rgProcessType index. */
    public index: number;

    /** rgProcessType type. */
    public type: number;

    /** rgProcessType reward. */
    public reward: (number|Long);

    /**
     * Creates a new rgProcessType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns rgProcessType instance
     */
    public static create(properties?: IrgProcessType): rgProcessType;

    /**
     * Encodes the specified rgProcessType message. Does not implicitly {@link rgProcessType.verify|verify} messages.
     * @param message rgProcessType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrgProcessType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified rgProcessType message, length delimited. Does not implicitly {@link rgProcessType.verify|verify} messages.
     * @param message rgProcessType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IrgProcessType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a rgProcessType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns rgProcessType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rgProcessType;

    /**
     * Decodes a rgProcessType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns rgProcessType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rgProcessType;

    /**
     * Verifies a rgProcessType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a rgProcessType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns rgProcessType
     */
    public static fromObject(object: { [k: string]: any }): rgProcessType;

    /**
     * Creates a plain object from a rgProcessType message. Also converts values to other types if specified.
     * @param message rgProcessType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rgProcessType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this rgProcessType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bingoLgDetailType. */
export class bingoLgDetailType implements IbingoLgDetailType {

    /**
     * Constructs a new bingoLgDetailType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbingoLgDetailType);

    /** bingoLgDetailType rgProcess. */
    public rgProcess: IbingoRgProcessType[];

    /** bingoLgDetailType baseCost. */
    public baseCost: (number|Long);

    /**
     * Creates a new bingoLgDetailType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bingoLgDetailType instance
     */
    public static create(properties?: IbingoLgDetailType): bingoLgDetailType;

    /**
     * Encodes the specified bingoLgDetailType message. Does not implicitly {@link bingoLgDetailType.verify|verify} messages.
     * @param message bingoLgDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbingoLgDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bingoLgDetailType message, length delimited. Does not implicitly {@link bingoLgDetailType.verify|verify} messages.
     * @param message bingoLgDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbingoLgDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bingoLgDetailType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bingoLgDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoLgDetailType;

    /**
     * Decodes a bingoLgDetailType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bingoLgDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoLgDetailType;

    /**
     * Verifies a bingoLgDetailType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bingoLgDetailType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bingoLgDetailType
     */
    public static fromObject(object: { [k: string]: any }): bingoLgDetailType;

    /**
     * Creates a plain object from a bingoLgDetailType message. Also converts values to other types if specified.
     * @param message bingoLgDetailType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bingoLgDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bingoLgDetailType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bingoRgProcessType. */
export class bingoRgProcessType implements IbingoRgProcessType {

    /**
     * Constructs a new bingoRgProcessType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbingoRgProcessType);

    /** bingoRgProcessType sceneId. */
    public sceneId: number;

    /** bingoRgProcessType index. */
    public index: number;

    /** bingoRgProcessType type. */
    public type: number;

    /** bingoRgProcessType reward. */
    public reward: (number|Long);

    /**
     * Creates a new bingoRgProcessType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bingoRgProcessType instance
     */
    public static create(properties?: IbingoRgProcessType): bingoRgProcessType;

    /**
     * Encodes the specified bingoRgProcessType message. Does not implicitly {@link bingoRgProcessType.verify|verify} messages.
     * @param message bingoRgProcessType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbingoRgProcessType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bingoRgProcessType message, length delimited. Does not implicitly {@link bingoRgProcessType.verify|verify} messages.
     * @param message bingoRgProcessType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbingoRgProcessType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bingoRgProcessType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bingoRgProcessType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoRgProcessType;

    /**
     * Decodes a bingoRgProcessType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bingoRgProcessType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoRgProcessType;

    /**
     * Verifies a bingoRgProcessType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bingoRgProcessType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bingoRgProcessType
     */
    public static fromObject(object: { [k: string]: any }): bingoRgProcessType;

    /**
     * Creates a plain object from a bingoRgProcessType message. Also converts values to other types if specified.
     * @param message bingoRgProcessType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bingoRgProcessType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bingoRgProcessType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a scatterResultType. */
export class scatterResultType implements IscatterResultType {

    /**
     * Constructs a new scatterResultType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IscatterResultType);

    /** scatterResultType elemId. */
    public elemId: number;

    /** scatterResultType number. */
    public number: number;

    /** scatterResultType scores. */
    public scores: (number|Long);

    /** scatterResultType rate. */
    public rate: number;

    /** scatterResultType dir. */
    public dir: number;

    /**
     * Creates a new scatterResultType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns scatterResultType instance
     */
    public static create(properties?: IscatterResultType): scatterResultType;

    /**
     * Encodes the specified scatterResultType message. Does not implicitly {@link scatterResultType.verify|verify} messages.
     * @param message scatterResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IscatterResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified scatterResultType message, length delimited. Does not implicitly {@link scatterResultType.verify|verify} messages.
     * @param message scatterResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IscatterResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a scatterResultType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns scatterResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): scatterResultType;

    /**
     * Decodes a scatterResultType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns scatterResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): scatterResultType;

    /**
     * Verifies a scatterResultType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a scatterResultType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns scatterResultType
     */
    public static fromObject(object: { [k: string]: any }): scatterResultType;

    /**
     * Creates a plain object from a scatterResultType message. Also converts values to other types if specified.
     * @param message scatterResultType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: scatterResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this scatterResultType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a fullLineResultType. */
export class fullLineResultType implements IfullLineResultType {

    /**
     * Constructs a new fullLineResultType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IfullLineResultType);

    /** fullLineResultType index. */
    public index: number;

    /** fullLineResultType grid. */
    public grid: number[];

    /** fullLineResultType fullLineResultList. */
    public fullLineResultList: IfullLineResultListType[];

    /**
     * Creates a new fullLineResultType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns fullLineResultType instance
     */
    public static create(properties?: IfullLineResultType): fullLineResultType;

    /**
     * Encodes the specified fullLineResultType message. Does not implicitly {@link fullLineResultType.verify|verify} messages.
     * @param message fullLineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IfullLineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified fullLineResultType message, length delimited. Does not implicitly {@link fullLineResultType.verify|verify} messages.
     * @param message fullLineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IfullLineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a fullLineResultType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns fullLineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fullLineResultType;

    /**
     * Decodes a fullLineResultType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns fullLineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fullLineResultType;

    /**
     * Verifies a fullLineResultType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a fullLineResultType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns fullLineResultType
     */
    public static fromObject(object: { [k: string]: any }): fullLineResultType;

    /**
     * Creates a plain object from a fullLineResultType message. Also converts values to other types if specified.
     * @param message fullLineResultType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: fullLineResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this fullLineResultType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a crushLineResultType. */
export class crushLineResultType implements IcrushLineResultType {

    /**
     * Constructs a new crushLineResultType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IcrushLineResultType);

    /** crushLineResultType index. */
    public index: number;

    /** crushLineResultType grid. */
    public grid: number[];

    /** crushLineResultType lineResult. */
    public lineResult: IlineResultType[];

    /** crushLineResultType crushRate. */
    public crushRate: number;

    /** crushLineResultType playType. */
    public playType: number;

    /** crushLineResultType spinCoin. */
    public spinCoin: (number|Long);

    /** crushLineResultType gridShow. */
    public gridShow: IgridShowType[];

    /** crushLineResultType occupyPosList. */
    public occupyPosList: IoccupyPosType[];

    /**
     * Creates a new crushLineResultType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns crushLineResultType instance
     */
    public static create(properties?: IcrushLineResultType): crushLineResultType;

    /**
     * Encodes the specified crushLineResultType message. Does not implicitly {@link crushLineResultType.verify|verify} messages.
     * @param message crushLineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IcrushLineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified crushLineResultType message, length delimited. Does not implicitly {@link crushLineResultType.verify|verify} messages.
     * @param message crushLineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IcrushLineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a crushLineResultType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns crushLineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): crushLineResultType;

    /**
     * Decodes a crushLineResultType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns crushLineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): crushLineResultType;

    /**
     * Verifies a crushLineResultType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a crushLineResultType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns crushLineResultType
     */
    public static fromObject(object: { [k: string]: any }): crushLineResultType;

    /**
     * Creates a plain object from a crushLineResultType message. Also converts values to other types if specified.
     * @param message crushLineResultType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: crushLineResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this crushLineResultType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an activeElemLineResultType. */
export class activeElemLineResultType implements IactiveElemLineResultType {

    /**
     * Constructs a new activeElemLineResultType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IactiveElemLineResultType);

    /** activeElemLineResultType index. */
    public index: number;

    /** activeElemLineResultType grid. */
    public grid: number[];

    /** activeElemLineResultType specialGrid. */
    public specialGrid: number[];

    /** activeElemLineResultType lineResult. */
    public lineResult: IlineResultType[];

    /**
     * Creates a new activeElemLineResultType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns activeElemLineResultType instance
     */
    public static create(properties?: IactiveElemLineResultType): activeElemLineResultType;

    /**
     * Encodes the specified activeElemLineResultType message. Does not implicitly {@link activeElemLineResultType.verify|verify} messages.
     * @param message activeElemLineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IactiveElemLineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified activeElemLineResultType message, length delimited. Does not implicitly {@link activeElemLineResultType.verify|verify} messages.
     * @param message activeElemLineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IactiveElemLineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an activeElemLineResultType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns activeElemLineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): activeElemLineResultType;

    /**
     * Decodes an activeElemLineResultType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns activeElemLineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): activeElemLineResultType;

    /**
     * Verifies an activeElemLineResultType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an activeElemLineResultType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns activeElemLineResultType
     */
    public static fromObject(object: { [k: string]: any }): activeElemLineResultType;

    /**
     * Creates a plain object from an activeElemLineResultType message. Also converts values to other types if specified.
     * @param message activeElemLineResultType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: activeElemLineResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this activeElemLineResultType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a gridRateType. */
export class gridRateType implements IgridRateType {

    /**
     * Constructs a new gridRateType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IgridRateType);

    /** gridRateType pos. */
    public pos: number;

    /** gridRateType rate. */
    public rate: number;

    /**
     * Creates a new gridRateType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gridRateType instance
     */
    public static create(properties?: IgridRateType): gridRateType;

    /**
     * Encodes the specified gridRateType message. Does not implicitly {@link gridRateType.verify|verify} messages.
     * @param message gridRateType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgridRateType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gridRateType message, length delimited. Does not implicitly {@link gridRateType.verify|verify} messages.
     * @param message gridRateType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgridRateType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gridRateType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gridRateType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gridRateType;

    /**
     * Decodes a gridRateType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gridRateType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gridRateType;

    /**
     * Verifies a gridRateType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gridRateType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gridRateType
     */
    public static fromObject(object: { [k: string]: any }): gridRateType;

    /**
     * Creates a plain object from a gridRateType message. Also converts values to other types if specified.
     * @param message gridRateType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gridRateType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gridRateType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an attachListType. */
export class attachListType implements IattachListType {

    /**
     * Constructs a new attachListType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IattachListType);

    /** attachListType attachScores. */
    public attachScores: (number|Long)[];

    /**
     * Creates a new attachListType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns attachListType instance
     */
    public static create(properties?: IattachListType): attachListType;

    /**
     * Encodes the specified attachListType message. Does not implicitly {@link attachListType.verify|verify} messages.
     * @param message attachListType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IattachListType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified attachListType message, length delimited. Does not implicitly {@link attachListType.verify|verify} messages.
     * @param message attachListType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IattachListType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an attachListType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns attachListType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): attachListType;

    /**
     * Decodes an attachListType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns attachListType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): attachListType;

    /**
     * Verifies an attachListType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an attachListType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns attachListType
     */
    public static fromObject(object: { [k: string]: any }): attachListType;

    /**
     * Creates a plain object from an attachListType message. Also converts values to other types if specified.
     * @param message attachListType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: attachListType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this attachListType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a gridShowType. */
export class gridShowType implements IgridShowType {

    /**
     * Constructs a new gridShowType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IgridShowType);

    /** gridShowType show. */
    public show: number[];

    /**
     * Creates a new gridShowType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gridShowType instance
     */
    public static create(properties?: IgridShowType): gridShowType;

    /**
     * Encodes the specified gridShowType message. Does not implicitly {@link gridShowType.verify|verify} messages.
     * @param message gridShowType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgridShowType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gridShowType message, length delimited. Does not implicitly {@link gridShowType.verify|verify} messages.
     * @param message gridShowType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgridShowType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gridShowType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gridShowType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gridShowType;

    /**
     * Decodes a gridShowType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gridShowType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gridShowType;

    /**
     * Verifies a gridShowType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gridShowType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gridShowType
     */
    public static fromObject(object: { [k: string]: any }): gridShowType;

    /**
     * Creates a plain object from a gridShowType message. Also converts values to other types if specified.
     * @param message gridShowType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gridShowType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gridShowType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an occupyPosType. */
export class occupyPosType implements IoccupyPosType {

    /**
     * Constructs a new occupyPosType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IoccupyPosType);

    /** occupyPosType pos. */
    public pos: number;

    /** occupyPosType len. */
    public len: number;

    /**
     * Creates a new occupyPosType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns occupyPosType instance
     */
    public static create(properties?: IoccupyPosType): occupyPosType;

    /**
     * Encodes the specified occupyPosType message. Does not implicitly {@link occupyPosType.verify|verify} messages.
     * @param message occupyPosType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IoccupyPosType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified occupyPosType message, length delimited. Does not implicitly {@link occupyPosType.verify|verify} messages.
     * @param message occupyPosType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IoccupyPosType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an occupyPosType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns occupyPosType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): occupyPosType;

    /**
     * Decodes an occupyPosType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns occupyPosType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): occupyPosType;

    /**
     * Verifies an occupyPosType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an occupyPosType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns occupyPosType
     */
    public static fromObject(object: { [k: string]: any }): occupyPosType;

    /**
     * Creates a plain object from an occupyPosType message. Also converts values to other types if specified.
     * @param message occupyPosType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: occupyPosType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this occupyPosType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bfgDetailType. */
export class bfgDetailType implements IbfgDetailType {

    /**
     * Constructs a new bfgDetailType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbfgDetailType);

    /** bfgDetailType costRate. */
    public costRate: number;

    /** bfgDetailType freeTime. */
    public freeTime: number;

    /** bfgDetailType cost. */
    public cost: (number|Long);

    /**
     * Creates a new bfgDetailType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bfgDetailType instance
     */
    public static create(properties?: IbfgDetailType): bfgDetailType;

    /**
     * Encodes the specified bfgDetailType message. Does not implicitly {@link bfgDetailType.verify|verify} messages.
     * @param message bfgDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbfgDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bfgDetailType message, length delimited. Does not implicitly {@link bfgDetailType.verify|verify} messages.
     * @param message bfgDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbfgDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bfgDetailType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bfgDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bfgDetailType;

    /**
     * Decodes a bfgDetailType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bfgDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bfgDetailType;

    /**
     * Verifies a bfgDetailType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bfgDetailType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bfgDetailType
     */
    public static fromObject(object: { [k: string]: any }): bfgDetailType;

    /**
     * Creates a plain object from a bfgDetailType message. Also converts values to other types if specified.
     * @param message bfgDetailType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bfgDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bfgDetailType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a doubleCoinDetailType. */
export class doubleCoinDetailType implements IdoubleCoinDetailType {

    /**
     * Constructs a new doubleCoinDetailType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IdoubleCoinDetailType);

    /** doubleCoinDetailType cost. */
    public cost: (number|Long);

    /** doubleCoinDetailType winRate. */
    public winRate: number;

    /** doubleCoinDetailType bonus. */
    public bonus: (number|Long);

    /** doubleCoinDetailType resultList. */
    public resultList: number[];

    /**
     * Creates a new doubleCoinDetailType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns doubleCoinDetailType instance
     */
    public static create(properties?: IdoubleCoinDetailType): doubleCoinDetailType;

    /**
     * Encodes the specified doubleCoinDetailType message. Does not implicitly {@link doubleCoinDetailType.verify|verify} messages.
     * @param message doubleCoinDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IdoubleCoinDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified doubleCoinDetailType message, length delimited. Does not implicitly {@link doubleCoinDetailType.verify|verify} messages.
     * @param message doubleCoinDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IdoubleCoinDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a doubleCoinDetailType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns doubleCoinDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): doubleCoinDetailType;

    /**
     * Decodes a doubleCoinDetailType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns doubleCoinDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): doubleCoinDetailType;

    /**
     * Verifies a doubleCoinDetailType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a doubleCoinDetailType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns doubleCoinDetailType
     */
    public static fromObject(object: { [k: string]: any }): doubleCoinDetailType;

    /**
     * Creates a plain object from a doubleCoinDetailType message. Also converts values to other types if specified.
     * @param message doubleCoinDetailType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: doubleCoinDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this doubleCoinDetailType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a doubleCoinHashType. */
export class doubleCoinHashType implements IdoubleCoinHashType {

    /**
     * Constructs a new doubleCoinHashType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IdoubleCoinHashType);

    /** doubleCoinHashType serverSeed. */
    public serverSeed: string;

    /** doubleCoinHashType serverHash. */
    public serverHash: string;

    /** doubleCoinHashType clientSeed. */
    public clientSeed: string;

    /** doubleCoinHashType randomNum. */
    public randomNum: number;

    /**
     * Creates a new doubleCoinHashType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns doubleCoinHashType instance
     */
    public static create(properties?: IdoubleCoinHashType): doubleCoinHashType;

    /**
     * Encodes the specified doubleCoinHashType message. Does not implicitly {@link doubleCoinHashType.verify|verify} messages.
     * @param message doubleCoinHashType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IdoubleCoinHashType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified doubleCoinHashType message, length delimited. Does not implicitly {@link doubleCoinHashType.verify|verify} messages.
     * @param message doubleCoinHashType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IdoubleCoinHashType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a doubleCoinHashType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns doubleCoinHashType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): doubleCoinHashType;

    /**
     * Decodes a doubleCoinHashType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns doubleCoinHashType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): doubleCoinHashType;

    /**
     * Verifies a doubleCoinHashType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a doubleCoinHashType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns doubleCoinHashType
     */
    public static fromObject(object: { [k: string]: any }): doubleCoinHashType;

    /**
     * Creates a plain object from a doubleCoinHashType message. Also converts values to other types if specified.
     * @param message doubleCoinHashType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: doubleCoinHashType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this doubleCoinHashType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a fullLineResultListType. */
export class fullLineResultListType implements IfullLineResultListType {

    /**
     * Constructs a new fullLineResultListType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IfullLineResultListType);

    /** fullLineResultListType number. */
    public number: number;

    /** fullLineResultListType elemRate. */
    public elemRate: number;

    /** fullLineResultListType scores. */
    public scores: (number|Long);

    /** fullLineResultListType rate. */
    public rate: number;

    /** fullLineResultListType elemList. */
    public elemList: number[];

    /**
     * Creates a new fullLineResultListType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns fullLineResultListType instance
     */
    public static create(properties?: IfullLineResultListType): fullLineResultListType;

    /**
     * Encodes the specified fullLineResultListType message. Does not implicitly {@link fullLineResultListType.verify|verify} messages.
     * @param message fullLineResultListType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IfullLineResultListType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified fullLineResultListType message, length delimited. Does not implicitly {@link fullLineResultListType.verify|verify} messages.
     * @param message fullLineResultListType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IfullLineResultListType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a fullLineResultListType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns fullLineResultListType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fullLineResultListType;

    /**
     * Decodes a fullLineResultListType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns fullLineResultListType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fullLineResultListType;

    /**
     * Verifies a fullLineResultListType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a fullLineResultListType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns fullLineResultListType
     */
    public static fromObject(object: { [k: string]: any }): fullLineResultListType;

    /**
     * Creates a plain object from a fullLineResultListType message. Also converts values to other types if specified.
     * @param message fullLineResultListType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: fullLineResultListType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this fullLineResultListType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a gridType. */
export class gridType implements IgridType {

    /**
     * Constructs a new gridType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IgridType);

    /** gridType pos. */
    public pos: number;

    /** gridType elem. */
    public elem: number;

    /**
     * Creates a new gridType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gridType instance
     */
    public static create(properties?: IgridType): gridType;

    /**
     * Encodes the specified gridType message. Does not implicitly {@link gridType.verify|verify} messages.
     * @param message gridType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgridType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gridType message, length delimited. Does not implicitly {@link gridType.verify|verify} messages.
     * @param message gridType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgridType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gridType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gridType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gridType;

    /**
     * Decodes a gridType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gridType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gridType;

    /**
     * Verifies a gridType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gridType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gridType
     */
    public static fromObject(object: { [k: string]: any }): gridType;

    /**
     * Creates a plain object from a gridType message. Also converts values to other types if specified.
     * @param message gridType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gridType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gridType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a gridRewardType. */
export class gridRewardType implements IgridRewardType {

    /**
     * Constructs a new gridRewardType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IgridRewardType);

    /** gridRewardType pos. */
    public pos: number;

    /** gridRewardType goldReward. */
    public goldReward: (number|Long);

    /**
     * Creates a new gridRewardType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns gridRewardType instance
     */
    public static create(properties?: IgridRewardType): gridRewardType;

    /**
     * Encodes the specified gridRewardType message. Does not implicitly {@link gridRewardType.verify|verify} messages.
     * @param message gridRewardType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgridRewardType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified gridRewardType message, length delimited. Does not implicitly {@link gridRewardType.verify|verify} messages.
     * @param message gridRewardType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgridRewardType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a gridRewardType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns gridRewardType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gridRewardType;

    /**
     * Decodes a gridRewardType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns gridRewardType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gridRewardType;

    /**
     * Verifies a gridRewardType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a gridRewardType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns gridRewardType
     */
    public static fromObject(object: { [k: string]: any }): gridRewardType;

    /**
     * Creates a plain object from a gridRewardType message. Also converts values to other types if specified.
     * @param message gridRewardType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: gridRewardType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this gridRewardType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a taskListType. */
export class taskListType implements ItaskListType {

    /**
     * Constructs a new taskListType.
     * @param [properties] Properties to set
     */
    constructor(properties?: ItaskListType);

    /** taskListType taskId. */
    public taskId: number;

    /** taskListType elementId. */
    public elementId: number;

    /** taskListType reward. */
    public reward: (number|Long);

    /** taskListType maxNum. */
    public maxNum: number;

    /** taskListType num. */
    public num: number;

    /** taskListType taskType. */
    public taskType: number;

    /**
     * Creates a new taskListType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns taskListType instance
     */
    public static create(properties?: ItaskListType): taskListType;

    /**
     * Encodes the specified taskListType message. Does not implicitly {@link taskListType.verify|verify} messages.
     * @param message taskListType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ItaskListType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified taskListType message, length delimited. Does not implicitly {@link taskListType.verify|verify} messages.
     * @param message taskListType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ItaskListType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a taskListType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns taskListType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): taskListType;

    /**
     * Decodes a taskListType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns taskListType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): taskListType;

    /**
     * Verifies a taskListType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a taskListType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns taskListType
     */
    public static fromObject(object: { [k: string]: any }): taskListType;

    /**
     * Creates a plain object from a taskListType message. Also converts values to other types if specified.
     * @param message taskListType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: taskListType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this taskListType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a goldRandomRewardType. */
export class goldRandomRewardType implements IgoldRandomRewardType {

    /**
     * Constructs a new goldRandomRewardType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IgoldRandomRewardType);

    /** goldRandomRewardType gridReward. */
    public gridReward: IgridRewardType[];

    /** goldRandomRewardType randomReward. */
    public randomReward: IrandomRewardType[];

    /**
     * Creates a new goldRandomRewardType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns goldRandomRewardType instance
     */
    public static create(properties?: IgoldRandomRewardType): goldRandomRewardType;

    /**
     * Encodes the specified goldRandomRewardType message. Does not implicitly {@link goldRandomRewardType.verify|verify} messages.
     * @param message goldRandomRewardType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IgoldRandomRewardType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified goldRandomRewardType message, length delimited. Does not implicitly {@link goldRandomRewardType.verify|verify} messages.
     * @param message goldRandomRewardType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IgoldRandomRewardType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a goldRandomRewardType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns goldRandomRewardType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): goldRandomRewardType;

    /**
     * Decodes a goldRandomRewardType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns goldRandomRewardType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): goldRandomRewardType;

    /**
     * Verifies a goldRandomRewardType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a goldRandomRewardType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns goldRandomRewardType
     */
    public static fromObject(object: { [k: string]: any }): goldRandomRewardType;

    /**
     * Creates a plain object from a goldRandomRewardType message. Also converts values to other types if specified.
     * @param message goldRandomRewardType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: goldRandomRewardType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this goldRandomRewardType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a randomRewardType. */
export class randomRewardType implements IrandomRewardType {

    /**
     * Constructs a new randomRewardType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IrandomRewardType);

    /** randomRewardType elem. */
    public elem: number;

    /** randomRewardType goldReward. */
    public goldReward: (number|Long);

    /**
     * Creates a new randomRewardType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns randomRewardType instance
     */
    public static create(properties?: IrandomRewardType): randomRewardType;

    /**
     * Encodes the specified randomRewardType message. Does not implicitly {@link randomRewardType.verify|verify} messages.
     * @param message randomRewardType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IrandomRewardType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified randomRewardType message, length delimited. Does not implicitly {@link randomRewardType.verify|verify} messages.
     * @param message randomRewardType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IrandomRewardType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a randomRewardType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns randomRewardType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): randomRewardType;

    /**
     * Decodes a randomRewardType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns randomRewardType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): randomRewardType;

    /**
     * Verifies a randomRewardType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a randomRewardType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns randomRewardType
     */
    public static fromObject(object: { [k: string]: any }): randomRewardType;

    /**
     * Creates a plain object from a randomRewardType message. Also converts values to other types if specified.
     * @param message randomRewardType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: randomRewardType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this randomRewardType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an allActiveLineListType. */
export class allActiveLineListType implements IallActiveLineListType {

    /**
     * Constructs a new allActiveLineListType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IallActiveLineListType);

    /** allActiveLineListType elemList. */
    public elemList: number[];

    /**
     * Creates a new allActiveLineListType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns allActiveLineListType instance
     */
    public static create(properties?: IallActiveLineListType): allActiveLineListType;

    /**
     * Encodes the specified allActiveLineListType message. Does not implicitly {@link allActiveLineListType.verify|verify} messages.
     * @param message allActiveLineListType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IallActiveLineListType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified allActiveLineListType message, length delimited. Does not implicitly {@link allActiveLineListType.verify|verify} messages.
     * @param message allActiveLineListType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IallActiveLineListType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an allActiveLineListType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns allActiveLineListType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): allActiveLineListType;

    /**
     * Decodes an allActiveLineListType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns allActiveLineListType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): allActiveLineListType;

    /**
     * Verifies an allActiveLineListType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an allActiveLineListType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns allActiveLineListType
     */
    public static fromObject(object: { [k: string]: any }): allActiveLineListType;

    /**
     * Creates a plain object from an allActiveLineListType message. Also converts values to other types if specified.
     * @param message allActiveLineListType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: allActiveLineListType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this allActiveLineListType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a moveLineResultType. */
export class moveLineResultType implements ImoveLineResultType {

    /**
     * Constructs a new moveLineResultType.
     * @param [properties] Properties to set
     */
    constructor(properties?: ImoveLineResultType);

    /** moveLineResultType index. */
    public index: number;

    /** moveLineResultType grid. */
    public grid: number[];

    /** moveLineResultType lineResult. */
    public lineResult: IlineResultType[];

    /**
     * Creates a new moveLineResultType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns moveLineResultType instance
     */
    public static create(properties?: ImoveLineResultType): moveLineResultType;

    /**
     * Encodes the specified moveLineResultType message. Does not implicitly {@link moveLineResultType.verify|verify} messages.
     * @param message moveLineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ImoveLineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified moveLineResultType message, length delimited. Does not implicitly {@link moveLineResultType.verify|verify} messages.
     * @param message moveLineResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ImoveLineResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a moveLineResultType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns moveLineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): moveLineResultType;

    /**
     * Decodes a moveLineResultType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns moveLineResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): moveLineResultType;

    /**
     * Verifies a moveLineResultType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a moveLineResultType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns moveLineResultType
     */
    public static fromObject(object: { [k: string]: any }): moveLineResultType;

    /**
     * Creates a plain object from a moveLineResultType message. Also converts values to other types if specified.
     * @param message moveLineResultType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: moveLineResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this moveLineResultType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an extraRollerType. */
export class extraRollerType implements IextraRollerType {

    /**
     * Constructs a new extraRollerType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IextraRollerType);

    /** extraRollerType column. */
    public column: number;

    /** extraRollerType dir. */
    public dir: number;

    /** extraRollerType startDir. */
    public startDir: number;

    /** extraRollerType startColumn. */
    public startColumn: number;

    /**
     * Creates a new extraRollerType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns extraRollerType instance
     */
    public static create(properties?: IextraRollerType): extraRollerType;

    /**
     * Encodes the specified extraRollerType message. Does not implicitly {@link extraRollerType.verify|verify} messages.
     * @param message extraRollerType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IextraRollerType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified extraRollerType message, length delimited. Does not implicitly {@link extraRollerType.verify|verify} messages.
     * @param message extraRollerType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IextraRollerType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an extraRollerType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns extraRollerType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): extraRollerType;

    /**
     * Decodes an extraRollerType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns extraRollerType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): extraRollerType;

    /**
     * Verifies an extraRollerType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an extraRollerType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns extraRollerType
     */
    public static fromObject(object: { [k: string]: any }): extraRollerType;

    /**
     * Creates a plain object from an extraRollerType message. Also converts values to other types if specified.
     * @param message extraRollerType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: extraRollerType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this extraRollerType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a bingoResultType. */
export class bingoResultType implements IbingoResultType {

    /**
     * Constructs a new bingoResultType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IbingoResultType);

    /** bingoResultType dropBallList. */
    public dropBallList: bingoResultType.IbingoBallType[];

    /** bingoResultType extraBallList. */
    public extraBallList: bingoResultType.IbingoBallType[];

    /** bingoResultType cards. */
    public cards: bingoResultType.IbingoCardType[];

    /** bingoResultType cardResultList. */
    public cardResultList: bingoResultType.IbingoCardResultType[];

    /** bingoResultType extraBallResultList. */
    public extraBallResultList: bingoResultType.IbingoBallResultType[];

    /** bingoResultType cardBallTotal. */
    public cardBallTotal?: (bingoResultType.IbingoCardBallTotalType|null);

    /**
     * Creates a new bingoResultType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns bingoResultType instance
     */
    public static create(properties?: IbingoResultType): bingoResultType;

    /**
     * Encodes the specified bingoResultType message. Does not implicitly {@link bingoResultType.verify|verify} messages.
     * @param message bingoResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IbingoResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified bingoResultType message, length delimited. Does not implicitly {@link bingoResultType.verify|verify} messages.
     * @param message bingoResultType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IbingoResultType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a bingoResultType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns bingoResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoResultType;

    /**
     * Decodes a bingoResultType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns bingoResultType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoResultType;

    /**
     * Verifies a bingoResultType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a bingoResultType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns bingoResultType
     */
    public static fromObject(object: { [k: string]: any }): bingoResultType;

    /**
     * Creates a plain object from a bingoResultType message. Also converts values to other types if specified.
     * @param message bingoResultType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: bingoResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this bingoResultType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace bingoResultType {

    /** Properties of a bingoBallType. */
    interface IbingoBallType {

        /** bingoBallType index */
        index: number;

        /** bingoBallType type */
        type: number;

        /** bingoBallType number */
        number: number;

        /** bingoBallType isBought */
        isBought?: (boolean|null);

        /** bingoBallType extraCost */
        extraCost?: (number|Long|null);

        /** bingoBallType extraNumber */
        extraNumber?: (number|null);
    }

    /** Represents a bingoBallType. */
    class bingoBallType implements IbingoBallType {

        /**
         * Constructs a new bingoBallType.
         * @param [properties] Properties to set
         */
        constructor(properties?: bingoResultType.IbingoBallType);

        /** bingoBallType index. */
        public index: number;

        /** bingoBallType type. */
        public type: number;

        /** bingoBallType number. */
        public number: number;

        /** bingoBallType isBought. */
        public isBought: boolean;

        /** bingoBallType extraCost. */
        public extraCost: (number|Long);

        /** bingoBallType extraNumber. */
        public extraNumber: number;

        /**
         * Creates a new bingoBallType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bingoBallType instance
         */
        public static create(properties?: bingoResultType.IbingoBallType): bingoResultType.bingoBallType;

        /**
         * Encodes the specified bingoBallType message. Does not implicitly {@link bingoResultType.bingoBallType.verify|verify} messages.
         * @param message bingoBallType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bingoResultType.IbingoBallType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified bingoBallType message, length delimited. Does not implicitly {@link bingoResultType.bingoBallType.verify|verify} messages.
         * @param message bingoBallType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bingoResultType.IbingoBallType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a bingoBallType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bingoBallType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoResultType.bingoBallType;

        /**
         * Decodes a bingoBallType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bingoBallType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoResultType.bingoBallType;

        /**
         * Verifies a bingoBallType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a bingoBallType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns bingoBallType
         */
        public static fromObject(object: { [k: string]: any }): bingoResultType.bingoBallType;

        /**
         * Creates a plain object from a bingoBallType message. Also converts values to other types if specified.
         * @param message bingoBallType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bingoResultType.bingoBallType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this bingoBallType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a bingoCardType. */
    interface IbingoCardType {

        /** bingoCardType index */
        index: number;

        /** bingoCardType grids */
        grids?: (bingoResultType.bingoCardType.IbingoGridType[]|null);
    }

    /** Represents a bingoCardType. */
    class bingoCardType implements IbingoCardType {

        /**
         * Constructs a new bingoCardType.
         * @param [properties] Properties to set
         */
        constructor(properties?: bingoResultType.IbingoCardType);

        /** bingoCardType index. */
        public index: number;

        /** bingoCardType grids. */
        public grids: bingoResultType.bingoCardType.IbingoGridType[];

        /**
         * Creates a new bingoCardType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bingoCardType instance
         */
        public static create(properties?: bingoResultType.IbingoCardType): bingoResultType.bingoCardType;

        /**
         * Encodes the specified bingoCardType message. Does not implicitly {@link bingoResultType.bingoCardType.verify|verify} messages.
         * @param message bingoCardType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bingoResultType.IbingoCardType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified bingoCardType message, length delimited. Does not implicitly {@link bingoResultType.bingoCardType.verify|verify} messages.
         * @param message bingoCardType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bingoResultType.IbingoCardType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a bingoCardType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bingoCardType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoResultType.bingoCardType;

        /**
         * Decodes a bingoCardType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bingoCardType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoResultType.bingoCardType;

        /**
         * Verifies a bingoCardType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a bingoCardType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns bingoCardType
         */
        public static fromObject(object: { [k: string]: any }): bingoResultType.bingoCardType;

        /**
         * Creates a plain object from a bingoCardType message. Also converts values to other types if specified.
         * @param message bingoCardType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bingoResultType.bingoCardType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this bingoCardType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace bingoCardType {

        /** Properties of a bingoGridType. */
        interface IbingoGridType {

            /** bingoGridType index */
            index: number;

            /** bingoGridType number */
            number: number;

            /** bingoGridType isSpotted */
            isSpotted: boolean;

            /** bingoGridType isLinghtning */
            isLinghtning?: (boolean|null);

            /** bingoGridType isWin */
            isWin: boolean;
        }

        /** Represents a bingoGridType. */
        class bingoGridType implements IbingoGridType {

            /**
             * Constructs a new bingoGridType.
             * @param [properties] Properties to set
             */
            constructor(properties?: bingoResultType.bingoCardType.IbingoGridType);

            /** bingoGridType index. */
            public index: number;

            /** bingoGridType number. */
            public number: number;

            /** bingoGridType isSpotted. */
            public isSpotted: boolean;

            /** bingoGridType isLinghtning. */
            public isLinghtning: boolean;

            /** bingoGridType isWin. */
            public isWin: boolean;

            /**
             * Creates a new bingoGridType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns bingoGridType instance
             */
            public static create(properties?: bingoResultType.bingoCardType.IbingoGridType): bingoResultType.bingoCardType.bingoGridType;

            /**
             * Encodes the specified bingoGridType message. Does not implicitly {@link bingoResultType.bingoCardType.bingoGridType.verify|verify} messages.
             * @param message bingoGridType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: bingoResultType.bingoCardType.IbingoGridType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified bingoGridType message, length delimited. Does not implicitly {@link bingoResultType.bingoCardType.bingoGridType.verify|verify} messages.
             * @param message bingoGridType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: bingoResultType.bingoCardType.IbingoGridType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a bingoGridType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns bingoGridType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoResultType.bingoCardType.bingoGridType;

            /**
             * Decodes a bingoGridType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns bingoGridType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoResultType.bingoCardType.bingoGridType;

            /**
             * Verifies a bingoGridType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a bingoGridType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns bingoGridType
             */
            public static fromObject(object: { [k: string]: any }): bingoResultType.bingoCardType.bingoGridType;

            /**
             * Creates a plain object from a bingoGridType message. Also converts values to other types if specified.
             * @param message bingoGridType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: bingoResultType.bingoCardType.bingoGridType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this bingoGridType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a bingoCardResultType. */
    interface IbingoCardResultType {

        /** bingoCardResultType cardIndex */
        cardIndex: number;

        /** bingoCardResultType patternId */
        patternId: number;

        /** bingoCardResultType cardCost */
        cardCost: (number|Long);

        /** bingoCardResultType rate */
        rate: number;

        /** bingoCardResultType bound */
        bound: (number|Long);

        /** bingoCardResultType lineId */
        lineId: number;
    }

    /** Represents a bingoCardResultType. */
    class bingoCardResultType implements IbingoCardResultType {

        /**
         * Constructs a new bingoCardResultType.
         * @param [properties] Properties to set
         */
        constructor(properties?: bingoResultType.IbingoCardResultType);

        /** bingoCardResultType cardIndex. */
        public cardIndex: number;

        /** bingoCardResultType patternId. */
        public patternId: number;

        /** bingoCardResultType cardCost. */
        public cardCost: (number|Long);

        /** bingoCardResultType rate. */
        public rate: number;

        /** bingoCardResultType bound. */
        public bound: (number|Long);

        /** bingoCardResultType lineId. */
        public lineId: number;

        /**
         * Creates a new bingoCardResultType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bingoCardResultType instance
         */
        public static create(properties?: bingoResultType.IbingoCardResultType): bingoResultType.bingoCardResultType;

        /**
         * Encodes the specified bingoCardResultType message. Does not implicitly {@link bingoResultType.bingoCardResultType.verify|verify} messages.
         * @param message bingoCardResultType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bingoResultType.IbingoCardResultType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified bingoCardResultType message, length delimited. Does not implicitly {@link bingoResultType.bingoCardResultType.verify|verify} messages.
         * @param message bingoCardResultType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bingoResultType.IbingoCardResultType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a bingoCardResultType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bingoCardResultType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoResultType.bingoCardResultType;

        /**
         * Decodes a bingoCardResultType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bingoCardResultType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoResultType.bingoCardResultType;

        /**
         * Verifies a bingoCardResultType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a bingoCardResultType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns bingoCardResultType
         */
        public static fromObject(object: { [k: string]: any }): bingoResultType.bingoCardResultType;

        /**
         * Creates a plain object from a bingoCardResultType message. Also converts values to other types if specified.
         * @param message bingoCardResultType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bingoResultType.bingoCardResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this bingoCardResultType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a bingoBallResultType. */
    interface IbingoBallResultType {

        /** bingoBallResultType ballIndex */
        ballIndex: number;

        /** bingoBallResultType baseCost */
        baseCost?: (number|Long|null);

        /** bingoBallResultType bound */
        bound?: (number|Long|null);
    }

    /** Represents a bingoBallResultType. */
    class bingoBallResultType implements IbingoBallResultType {

        /**
         * Constructs a new bingoBallResultType.
         * @param [properties] Properties to set
         */
        constructor(properties?: bingoResultType.IbingoBallResultType);

        /** bingoBallResultType ballIndex. */
        public ballIndex: number;

        /** bingoBallResultType baseCost. */
        public baseCost: (number|Long);

        /** bingoBallResultType bound. */
        public bound: (number|Long);

        /**
         * Creates a new bingoBallResultType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bingoBallResultType instance
         */
        public static create(properties?: bingoResultType.IbingoBallResultType): bingoResultType.bingoBallResultType;

        /**
         * Encodes the specified bingoBallResultType message. Does not implicitly {@link bingoResultType.bingoBallResultType.verify|verify} messages.
         * @param message bingoBallResultType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bingoResultType.IbingoBallResultType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified bingoBallResultType message, length delimited. Does not implicitly {@link bingoResultType.bingoBallResultType.verify|verify} messages.
         * @param message bingoBallResultType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bingoResultType.IbingoBallResultType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a bingoBallResultType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bingoBallResultType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoResultType.bingoBallResultType;

        /**
         * Decodes a bingoBallResultType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bingoBallResultType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoResultType.bingoBallResultType;

        /**
         * Verifies a bingoBallResultType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a bingoBallResultType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns bingoBallResultType
         */
        public static fromObject(object: { [k: string]: any }): bingoResultType.bingoBallResultType;

        /**
         * Creates a plain object from a bingoBallResultType message. Also converts values to other types if specified.
         * @param message bingoBallResultType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bingoResultType.bingoBallResultType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this bingoBallResultType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a bingoCardBallTotalType. */
    interface IbingoCardBallTotalType {

        /** bingoCardBallTotalType cardTotal */
        cardTotal: (number|Long);

        /** bingoCardBallTotalType ballTotal */
        ballTotal: number;

        /** bingoCardBallTotalType total */
        total: (number|Long);
    }

    /** Represents a bingoCardBallTotalType. */
    class bingoCardBallTotalType implements IbingoCardBallTotalType {

        /**
         * Constructs a new bingoCardBallTotalType.
         * @param [properties] Properties to set
         */
        constructor(properties?: bingoResultType.IbingoCardBallTotalType);

        /** bingoCardBallTotalType cardTotal. */
        public cardTotal: (number|Long);

        /** bingoCardBallTotalType ballTotal. */
        public ballTotal: number;

        /** bingoCardBallTotalType total. */
        public total: (number|Long);

        /**
         * Creates a new bingoCardBallTotalType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns bingoCardBallTotalType instance
         */
        public static create(properties?: bingoResultType.IbingoCardBallTotalType): bingoResultType.bingoCardBallTotalType;

        /**
         * Encodes the specified bingoCardBallTotalType message. Does not implicitly {@link bingoResultType.bingoCardBallTotalType.verify|verify} messages.
         * @param message bingoCardBallTotalType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bingoResultType.IbingoCardBallTotalType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified bingoCardBallTotalType message, length delimited. Does not implicitly {@link bingoResultType.bingoCardBallTotalType.verify|verify} messages.
         * @param message bingoCardBallTotalType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bingoResultType.IbingoCardBallTotalType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a bingoCardBallTotalType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns bingoCardBallTotalType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bingoResultType.bingoCardBallTotalType;

        /**
         * Decodes a bingoCardBallTotalType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns bingoCardBallTotalType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bingoResultType.bingoCardBallTotalType;

        /**
         * Verifies a bingoCardBallTotalType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a bingoCardBallTotalType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns bingoCardBallTotalType
         */
        public static fromObject(object: { [k: string]: any }): bingoResultType.bingoCardBallTotalType;

        /**
         * Creates a plain object from a bingoCardBallTotalType message. Also converts values to other types if specified.
         * @param message bingoCardBallTotalType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bingoResultType.bingoCardBallTotalType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this bingoCardBallTotalType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** world_mission_cmd enum. */
export enum world_mission_cmd {
    worldMissionStartPush = 0,
    worldMissionStopPush = 1,
    worldMissionUpdatePush = 3,
    worldMissionDonePush = 4,
    worldMissionRewardPush = 5,
    worldMissionInfoReq = 6,
    worldMissionInfoResp = 7
}

/** Represents a msg_world_mission_service */
export class msg_world_mission_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_world_mission_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_world_mission_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_world_mission_service;
}

/** Represents a worldMissionStartPush. */
export class worldMissionStartPush implements IworldMissionStartPush {

    /**
     * Constructs a new worldMissionStartPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldMissionStartPush);

    /** worldMissionStartPush gameId. */
    public gameId: number;

    /** worldMissionStartPush missionCount. */
    public missionCount: (number|Long);

    /** worldMissionStartPush timeLeft. */
    public timeLeft: number;

    /**
     * Creates a new worldMissionStartPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldMissionStartPush instance
     */
    public static create(properties?: IworldMissionStartPush): worldMissionStartPush;

    /**
     * Encodes the specified worldMissionStartPush message. Does not implicitly {@link worldMissionStartPush.verify|verify} messages.
     * @param message worldMissionStartPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldMissionStartPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldMissionStartPush message, length delimited. Does not implicitly {@link worldMissionStartPush.verify|verify} messages.
     * @param message worldMissionStartPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldMissionStartPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldMissionStartPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldMissionStartPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldMissionStartPush;

    /**
     * Decodes a worldMissionStartPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldMissionStartPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldMissionStartPush;

    /**
     * Verifies a worldMissionStartPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldMissionStartPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldMissionStartPush
     */
    public static fromObject(object: { [k: string]: any }): worldMissionStartPush;

    /**
     * Creates a plain object from a worldMissionStartPush message. Also converts values to other types if specified.
     * @param message worldMissionStartPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldMissionStartPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldMissionStartPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a worldMissionStopPush. */
export class worldMissionStopPush implements IworldMissionStopPush {

    /**
     * Constructs a new worldMissionStopPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldMissionStopPush);

    /** worldMissionStopPush gameId. */
    public gameId: number;

    /**
     * Creates a new worldMissionStopPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldMissionStopPush instance
     */
    public static create(properties?: IworldMissionStopPush): worldMissionStopPush;

    /**
     * Encodes the specified worldMissionStopPush message. Does not implicitly {@link worldMissionStopPush.verify|verify} messages.
     * @param message worldMissionStopPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldMissionStopPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldMissionStopPush message, length delimited. Does not implicitly {@link worldMissionStopPush.verify|verify} messages.
     * @param message worldMissionStopPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldMissionStopPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldMissionStopPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldMissionStopPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldMissionStopPush;

    /**
     * Decodes a worldMissionStopPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldMissionStopPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldMissionStopPush;

    /**
     * Verifies a worldMissionStopPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldMissionStopPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldMissionStopPush
     */
    public static fromObject(object: { [k: string]: any }): worldMissionStopPush;

    /**
     * Creates a plain object from a worldMissionStopPush message. Also converts values to other types if specified.
     * @param message worldMissionStopPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldMissionStopPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldMissionStopPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a worldMissionUpdatePush. */
export class worldMissionUpdatePush implements IworldMissionUpdatePush {

    /**
     * Constructs a new worldMissionUpdatePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldMissionUpdatePush);

    /** worldMissionUpdatePush gameId. */
    public gameId: number;

    /** worldMissionUpdatePush missionCount. */
    public missionCount: (number|Long);

    /** worldMissionUpdatePush curMissionCount. */
    public curMissionCount: (number|Long);

    /** worldMissionUpdatePush missionUpdate. */
    public missionUpdate: (number|Long);

    /** worldMissionUpdatePush userId. */
    public userId: (number|Long);

    /**
     * Creates a new worldMissionUpdatePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldMissionUpdatePush instance
     */
    public static create(properties?: IworldMissionUpdatePush): worldMissionUpdatePush;

    /**
     * Encodes the specified worldMissionUpdatePush message. Does not implicitly {@link worldMissionUpdatePush.verify|verify} messages.
     * @param message worldMissionUpdatePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldMissionUpdatePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldMissionUpdatePush message, length delimited. Does not implicitly {@link worldMissionUpdatePush.verify|verify} messages.
     * @param message worldMissionUpdatePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldMissionUpdatePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldMissionUpdatePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldMissionUpdatePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldMissionUpdatePush;

    /**
     * Decodes a worldMissionUpdatePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldMissionUpdatePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldMissionUpdatePush;

    /**
     * Verifies a worldMissionUpdatePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldMissionUpdatePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldMissionUpdatePush
     */
    public static fromObject(object: { [k: string]: any }): worldMissionUpdatePush;

    /**
     * Creates a plain object from a worldMissionUpdatePush message. Also converts values to other types if specified.
     * @param message worldMissionUpdatePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldMissionUpdatePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldMissionUpdatePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a worldMissionDonePush. */
export class worldMissionDonePush implements IworldMissionDonePush {

    /**
     * Constructs a new worldMissionDonePush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldMissionDonePush);

    /** worldMissionDonePush gameId. */
    public gameId: number;

    /**
     * Creates a new worldMissionDonePush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldMissionDonePush instance
     */
    public static create(properties?: IworldMissionDonePush): worldMissionDonePush;

    /**
     * Encodes the specified worldMissionDonePush message. Does not implicitly {@link worldMissionDonePush.verify|verify} messages.
     * @param message worldMissionDonePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldMissionDonePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldMissionDonePush message, length delimited. Does not implicitly {@link worldMissionDonePush.verify|verify} messages.
     * @param message worldMissionDonePush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldMissionDonePush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldMissionDonePush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldMissionDonePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldMissionDonePush;

    /**
     * Decodes a worldMissionDonePush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldMissionDonePush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldMissionDonePush;

    /**
     * Verifies a worldMissionDonePush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldMissionDonePush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldMissionDonePush
     */
    public static fromObject(object: { [k: string]: any }): worldMissionDonePush;

    /**
     * Creates a plain object from a worldMissionDonePush message. Also converts values to other types if specified.
     * @param message worldMissionDonePush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldMissionDonePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldMissionDonePush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a worldMissionRewardPush. */
export class worldMissionRewardPush implements IworldMissionRewardPush {

    /**
     * Constructs a new worldMissionRewardPush.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldMissionRewardPush);

    /** worldMissionRewardPush gameId. */
    public gameId: number;

    /** worldMissionRewardPush reward. */
    public reward: (number|Long);

    /**
     * Creates a new worldMissionRewardPush instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldMissionRewardPush instance
     */
    public static create(properties?: IworldMissionRewardPush): worldMissionRewardPush;

    /**
     * Encodes the specified worldMissionRewardPush message. Does not implicitly {@link worldMissionRewardPush.verify|verify} messages.
     * @param message worldMissionRewardPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldMissionRewardPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldMissionRewardPush message, length delimited. Does not implicitly {@link worldMissionRewardPush.verify|verify} messages.
     * @param message worldMissionRewardPush message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldMissionRewardPush, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldMissionRewardPush message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldMissionRewardPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldMissionRewardPush;

    /**
     * Decodes a worldMissionRewardPush message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldMissionRewardPush
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldMissionRewardPush;

    /**
     * Verifies a worldMissionRewardPush message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldMissionRewardPush message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldMissionRewardPush
     */
    public static fromObject(object: { [k: string]: any }): worldMissionRewardPush;

    /**
     * Creates a plain object from a worldMissionRewardPush message. Also converts values to other types if specified.
     * @param message worldMissionRewardPush
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldMissionRewardPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldMissionRewardPush to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a worldMissionInfoReq. */
export class worldMissionInfoReq implements IworldMissionInfoReq {

    /**
     * Constructs a new worldMissionInfoReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldMissionInfoReq);

    /** worldMissionInfoReq gameId. */
    public gameId: number;

    /**
     * Creates a new worldMissionInfoReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldMissionInfoReq instance
     */
    public static create(properties?: IworldMissionInfoReq): worldMissionInfoReq;

    /**
     * Encodes the specified worldMissionInfoReq message. Does not implicitly {@link worldMissionInfoReq.verify|verify} messages.
     * @param message worldMissionInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldMissionInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldMissionInfoReq message, length delimited. Does not implicitly {@link worldMissionInfoReq.verify|verify} messages.
     * @param message worldMissionInfoReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldMissionInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldMissionInfoReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldMissionInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldMissionInfoReq;

    /**
     * Decodes a worldMissionInfoReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldMissionInfoReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldMissionInfoReq;

    /**
     * Verifies a worldMissionInfoReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldMissionInfoReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldMissionInfoReq
     */
    public static fromObject(object: { [k: string]: any }): worldMissionInfoReq;

    /**
     * Creates a plain object from a worldMissionInfoReq message. Also converts values to other types if specified.
     * @param message worldMissionInfoReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldMissionInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldMissionInfoReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a worldMissionInfoResp. */
export class worldMissionInfoResp implements IworldMissionInfoResp {

    /**
     * Constructs a new worldMissionInfoResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldMissionInfoResp);

    /** worldMissionInfoResp gameId. */
    public gameId: number;

    /** worldMissionInfoResp isStart. */
    public isStart: boolean;

    /** worldMissionInfoResp missionCount. */
    public missionCount: (number|Long);

    /** worldMissionInfoResp curMissionCount. */
    public curMissionCount: (number|Long);

    /** worldMissionInfoResp timeLeft. */
    public timeLeft: number;

    /**
     * Creates a new worldMissionInfoResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldMissionInfoResp instance
     */
    public static create(properties?: IworldMissionInfoResp): worldMissionInfoResp;

    /**
     * Encodes the specified worldMissionInfoResp message. Does not implicitly {@link worldMissionInfoResp.verify|verify} messages.
     * @param message worldMissionInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldMissionInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldMissionInfoResp message, length delimited. Does not implicitly {@link worldMissionInfoResp.verify|verify} messages.
     * @param message worldMissionInfoResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldMissionInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldMissionInfoResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldMissionInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldMissionInfoResp;

    /**
     * Decodes a worldMissionInfoResp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldMissionInfoResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldMissionInfoResp;

    /**
     * Verifies a worldMissionInfoResp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldMissionInfoResp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldMissionInfoResp
     */
    public static fromObject(object: { [k: string]: any }): worldMissionInfoResp;

    /**
     * Creates a plain object from a worldMissionInfoResp message. Also converts values to other types if specified.
     * @param message worldMissionInfoResp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldMissionInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldMissionInfoResp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** world_mission_report_cmd enum. */
export enum world_mission_report_cmd {
    worldMissionGameDetail = 0
}

/** Represents a msg_world_mission_report_service */
export class msg_world_mission_report_service extends $protobuf.rpc.Service {

    /**
     * Constructs a new msg_world_mission_report_service service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new msg_world_mission_report_service service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): msg_world_mission_report_service;
}

/** Represents a worldMissionGameDetail. */
export class worldMissionGameDetail implements IworldMissionGameDetail {

    /**
     * Constructs a new worldMissionGameDetail.
     * @param [properties] Properties to set
     */
    constructor(properties?: IworldMissionGameDetail);

    /** worldMissionGameDetail detail. */
    public detail: IwmDetailType;

    /**
     * Creates a new worldMissionGameDetail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns worldMissionGameDetail instance
     */
    public static create(properties?: IworldMissionGameDetail): worldMissionGameDetail;

    /**
     * Encodes the specified worldMissionGameDetail message. Does not implicitly {@link worldMissionGameDetail.verify|verify} messages.
     * @param message worldMissionGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IworldMissionGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified worldMissionGameDetail message, length delimited. Does not implicitly {@link worldMissionGameDetail.verify|verify} messages.
     * @param message worldMissionGameDetail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IworldMissionGameDetail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a worldMissionGameDetail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns worldMissionGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): worldMissionGameDetail;

    /**
     * Decodes a worldMissionGameDetail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns worldMissionGameDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): worldMissionGameDetail;

    /**
     * Verifies a worldMissionGameDetail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a worldMissionGameDetail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns worldMissionGameDetail
     */
    public static fromObject(object: { [k: string]: any }): worldMissionGameDetail;

    /**
     * Creates a plain object from a worldMissionGameDetail message. Also converts values to other types if specified.
     * @param message worldMissionGameDetail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: worldMissionGameDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this worldMissionGameDetail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents a wmDetailType. */
export class wmDetailType implements IwmDetailType {

    /**
     * Constructs a new wmDetailType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IwmDetailType);

    /** wmDetailType reward. */
    public reward: (number|Long);

    /**
     * Creates a new wmDetailType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns wmDetailType instance
     */
    public static create(properties?: IwmDetailType): wmDetailType;

    /**
     * Encodes the specified wmDetailType message. Does not implicitly {@link wmDetailType.verify|verify} messages.
     * @param message wmDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IwmDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified wmDetailType message, length delimited. Does not implicitly {@link wmDetailType.verify|verify} messages.
     * @param message wmDetailType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IwmDetailType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a wmDetailType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns wmDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wmDetailType;

    /**
     * Decodes a wmDetailType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns wmDetailType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wmDetailType;

    /**
     * Verifies a wmDetailType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a wmDetailType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns wmDetailType
     */
    public static fromObject(object: { [k: string]: any }): wmDetailType;

    /**
     * Creates a plain object from a wmDetailType message. Also converts values to other types if specified.
     * @param message wmDetailType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: wmDetailType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this wmDetailType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

}