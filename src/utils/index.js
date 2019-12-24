/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (("" + time).length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 2) {
    return "1天前";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getMonth() +
      1 +
      "月" +
      d.getDate() +
      "日" +
      d.getHours() +
      "时" +
      d.getMinutes() +
      "分"
    );
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

/**
 * 是否对象
 */
export const isObject = obj => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

/**
 * 过滤提交内容中为空字符串的
 * @param {Object} data
 */
export function filterEmptyCommitData(data) {
  if (!isObject(data)) throw new error("提交内容必须是对象");
  let newData = {};
  Object.entries(data)
    .filter(el => el[1] !== "" && el[1] !== null && el[1] !== undefined)
    .forEach(el => {
      newData[el[0]] = el[1];
    });
  return newData;
}

/**
 *根据配置生成表单
 * @param {Array} data
 * @returns {Array} 表单配置
 */
export function createFormOptions(data) {
  return data
    .filter(el => el.IsEnabled) // 过滤未创建
    .sort((a, b) => a.FOrderNo - b.FOrderNo) // 排序
    .map(el => {
      let formOptions = { $el: { size: "mini" } };
      formOptions.$id = el.FFieldName; // 字段
      if (!el.IsVisible) {
        formOptions.$el.type = "hidden";
      } else {
        formOptions.label = el.FDisplayName; // 中文名
      } // 隐藏
      el.FDisplayType // 表单类型
        ? (formOptions.$type = el.FDisplayType)
        : (formOptions.$type = "input");
      return formOptions;
    });
}

/**
 * 根据配置生成表格列头
 * @param {Array} data
 * @returns {Array} 列头配置
 */
export function createColumnsOptions(data, needInnerInput) {
  return data
    .filter(el => el.IsEnabled) //过滤未创建
    .sort((a, b) => a.FOrderNo - b.FOrderNo) //排序
    .map(el => {
      let columns = {};
      if (needInnerInput) {
        let innerInput = [
          {
            $id: el.FFieldName, // 内置表单字段
            $type: el.FDisplayType ? el.FDisplayType : "input" // 内置表单类型
          }
        ];
        columns.innerInput = innerInput;
      }
      columns.prop = el.FFieldName; //字段
      columns.label = el.FDisplayName; //中文名
      columns.IsSummary = el.IsSummary; //合计
      columns.width = el.FFieldWidth; //列宽

      return columns;
    });
}
