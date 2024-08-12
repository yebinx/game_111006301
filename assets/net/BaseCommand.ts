
import { ByteBuffer } from './byteBuffer';
import def = require("./TypeDefine");
export class BaseCommand {
    constructor() {

    }

    size(value: any = this): number {
        if (value.constructor == def.BYTE || value.constructor == def.WORD
            || value.constructor == def.DWORD || value.constructor == def.LONGLONG
            || value.constructor == def.SCORE || value.constructor == def.FLOAT || value.constructor == def.DOUBLE
            || value.constructor == def.INT || value.constructor == def.UINI64 || value.constructor == def.SHORT) {
            return value.size;
        } else if (value.constructor == def.STRING || value.constructor == def.str_utf8_string) {
            return value.maxSize;
        } else if (value.constructor === def.str_varchar_string) {
            //str_varchar_string
            return 0;
        } else {
            let keys = Object.keys(value);
            let res = 0;
            for (let key of keys) {
                if (typeof key !== "function") {
                    let v = value[key];
                    if (v) {
                        res += this.size(v);
                    }
                }
            }
            return res;
        }
    }

    UTF8Length(input: string): number {
        let output = 0;
        for (let i = 0; i < input.length; i++) {
            let charCode = input.charCodeAt(i);
            if (charCode > 0x7FF) {
                if (0xD800 <= charCode && charCode <= 0xDBFF) {
                    i++;
                    output++;
                }
                output += 3;
            } else if (charCode > 0x7F) {
                output += 2;
            } else {
                output++;
            }
        }
        return output;
    }

    dynamic_size(value: any = this): number {

        if (value.constructor == def.BYTE || value.constructor == def.WORD
            || value.constructor == def.DWORD || value.constructor == def.LONGLONG
            || value.constructor == def.SCORE || value.constructor == def.FLOAT || value.constructor == def.DOUBLE
            || value.constructor == def.INT || value.constructor == def.UINI64 || value.constructor == def.SHORT) {
            return value.size;
        } else if (value.constructor == def.STRING || value.constructor == def.str_utf8_string) {
            return value.maxSize;
        } else if (value.constructor === def.str_varchar_string) {
            return this.UTF8Length(value.value) + 3;
        } else {
            let keys = Object.keys(value);
            let res = 0;
            for (let key of keys) {
                if (typeof key !== "function") {
                    let v = value[key];
                    if (v) {
                        res += this.dynamic_size(v);
                    }
                }
            }
            return res;
        }
    }

    writeData(value: any, bufferView: ByteBuffer): boolean {
        if (value.constructor == def.BYTE) {
            bufferView.writeUInt8(value.value);
        } else if (value.constructor == def.WORD) {
            bufferView.writeUInt16(value.value);
        } else if (value.constructor == def.DWORD) {
            bufferView.writeUInt32(value.value);
        } else if (value.constructor == def.LONGLONG) {
            bufferView.writeInt64(value.value);
        } else if (value.constructor == def.STRING) {
            bufferView.writeString(value.value, value.maxSize);
        } else if (value.constructor == def.str_utf8_string) {
            bufferView.writeUTF8String(value.value, value.maxSize);
        } else if (value.constructor == def.SCORE) {
            bufferView.writeInt64(value.value);
        } else if (value.constructor == def.FLOAT) {
            bufferView.writeFloat32(value.value);
        } else if (value.constructor == def.DOUBLE) {
            bufferView.writeFloat64(value.value);
        } else if (value.constructor == def.INT) {
            bufferView.writeInt32(value.value);
        } else if (value.constructor == def.UINI64) {
            bufferView.writeUInt64(value.value);
        } else if (value.constructor == def.SHORT) {
            bufferView.writeInt16(value.value);
        } else if (value.constructor === def.str_varchar_string) {
            bufferView.writeCString(value.value);
        }
        else {
            var keys = Object.keys(value);
            for (var i = 0, len = keys.length; i < len; i++) {
                if (typeof keys[i] != "function") {
                    var v = value[keys[i]];
                    if (v == null) continue;
                    if (!this.writeData(v, bufferView)) {
                        return false;
                    }
                }
            }
        }
        return !bufferView.hasError();
    }

    toData(): ByteBuffer | null {
        let buffer = new ByteBuffer(this.size());
        if (!this.writeData(this, buffer)) {
            console.error("Data packet toData error");
            return null;
        }
        return buffer;
    }

    readData(value: any, bufferView: ByteBuffer): boolean {
        if (value == null) return true; //忽略 不报错...?
        if (value.constructor == def.BYTE) {
            value.value = bufferView.readUInt8();
        } else if (value.constructor == def.WORD) {
            value.value = bufferView.readUInt16();
        } else if (value.constructor == def.DWORD) {
            value.value = bufferView.readUInt32();
        } else if (value.constructor == def.LONGLONG) {
            value.value = bufferView.readInt64();
        } else if (value.constructor == def.STRING) {
            value.value = bufferView.readString(value.maxSize);
        } else if (value.constructor == def.str_utf8_string) {//服务端下发 utf-8 客户端直接转utf-8 只有公告有用
            value.value = bufferView.readUTF8String(value.maxSize);
        } else if (value.constructor == def.str_dync_utf8_string) {
            value.value = bufferView.readUTF8String(value.getMaxSize())
        } else if (value.constructor == def.SCORE) {
            value.value = bufferView.readInt64();
        } else if (value.constructor == def.FLOAT) {
            value.value = bufferView.readFloat32();
        } else if (value.constructor == def.DOUBLE) {
            value.value = bufferView.readFloat64();
        } else if (value.constructor == def.INT) {
            value.value = bufferView.readInt32();
        } else if (value.constructor == def.UINI64) {
            value.value = bufferView.readUInt64();
        } else if (value.constructor == def.SHORT) {
            value.value = bufferView.readInt16();
        } else if (value.constructor == def.str_varchar_string) {
            value.value = bufferView.readCString();
        }
        else {
            var keys = Object.keys(value);
            for (var i = 0, len = keys.length; i < len; i++) {
                if (typeof keys[i] != "function") {
                    var v = value[keys[i]];
                    if (v == null) continue;
                    if (!this.readData(v, bufferView)) {
                        return false;
                    }
                }
            }
        }
        return !bufferView.hasError();
    }

    parseHead(data: ArrayBuffer, start: number = 0): boolean {
        let bufferView = new ByteBuffer();
        bufferView.setBufferData(data);
        bufferView.offset = start;
        if (!this.readData(this, bufferView)) {
            console.error("Data packet readData error");
            return false;
        }
        return true;
    }

    parse(data: ArrayBuffer, start: number = 0): boolean {
        let bufferView = new ByteBuffer();
        bufferView.setBufferData(data, true);
        bufferView.offset = start + 8;
        if (!this.readData(this, bufferView)) {
            console.error("Data packet readData error");
            return false;
        }
        return true;
    }
}

export class CSPacketHead extends BaseCommand {
    wDataSize;
    cbCheckCode;
    cbMessageVer;
    wMainCmdID;
    wSubCmdID;

    constructor() {
        super();
        this.wDataSize = new def.WORD(0);
        this.cbCheckCode = new def.BYTE(0);
        this.cbMessageVer = new def.BYTE(68);
        this.wMainCmdID = new def.WORD(0);
        this.wSubCmdID = new def.WORD(0);
    }
}

export class CSPacket extends BaseCommand {
    Head: CSPacketHead;
    Body: any | null;
    private _size: number;

    constructor(MainCmdID: number, SubCmdID: number, body: any = null) {
        super();
        this.Head = new CSPacketHead();
        this.Head.wMainCmdID.value = MainCmdID;
        this.Head.wSubCmdID.value = SubCmdID;
        this.Body = body;
        this.setSize();
    }

    setSize(size?: number): void {
        let body_size = 0;
        if (this.Body != null) body_size = this.Body.dynamic_size();
        this.Head.wDataSize.value = size ?? (body_size + 8);
        this._size = 8 + body_size;
    }

    size(): number {
        return this._size;
    }
}