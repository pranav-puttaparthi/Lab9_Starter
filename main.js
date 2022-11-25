window.addEventListener('DOMContentLoaded', init);

function init() {
    const consoleLogBtn = document.getElementById('console-log');
    const consoleErrBtn = document.getElementById('console-error');
    const consoleCountBtn = document.getElementById('console-count');
    const consoleWarnBtn = document.getElementById('console-warn');
    const consoleAssertBtn = document.getElementById('console-assert');
    const consoleClearBtn = document.getElementById('console-clear');
    const consoleDirBtn = document.getElementById('console-dir');
    const consoleDirXmlBtn = document.getElementById('console-dirxml');
    const consoleGroupStartBtn = document.getElementById('console-group-start');
    const consoleGroupEndBtn = document.getElementById('console-group-end');
    const consoleTableBtn = document.getElementById('console-table');
    const startTimerBtn = document.getElementById('start-timer');
    const endTimerBtn = document.getElementById('end-timer');
    const consoleTraceBtn = document.getElementById('console-trace');
    const globalErrorBtn = document.getElementById('global-error');
    const calculateBtn = document.getElementById('calculate');

    consoleLogBtn.addEventListener("click", function (event) {
        console.log('Console Log Demo');
    });
    consoleErrBtn.addEventListener("click", function (event) {
        console.error('Console Error Demo');
    });
    consoleCountBtn.addEventListener("click", function (event) {
        console.count('Console Count Demo');
    });
    consoleWarnBtn.addEventListener("click", function (event) {
        console.warn('Console Warn Demo');
    });
    consoleAssertBtn.addEventListener("click", function(event) {
        const x = 4;
        const y = 4;
        const reason = "x should be greater than y";
        console.assert(x > y, {x,y,reason});
    });
    consoleClearBtn.addEventListener("click", function (event) {
        console.clear();
    });
    consoleDirBtn.addEventListener("click", function(event) {
        console.dir(document);
    });
    consoleDirXmlBtn.addEventListener("click", function(event) {
        console.dirxml(document);
    });
    consoleGroupStartBtn.addEventListener("click", function(event) {
        console.group("Console Group Demo");
    });
    consoleGroupEndBtn.addEventListener("click", function (event) {
        console.groupEnd("Console Group Demo");
    });
    consoleTableBtn.addEventListener("click", function (event) {
        var tableDemo = [
            {
                first: 'ConsoleTable',
                last: 'Demo 1'
            },
            {
                first: 'ConsoleTable',
                last: 'Demo 2'
            },
            {
                first: 'ConsoleTable',
                last: 'Demo 3'
            }
        ];
        console.table(tableDemo);
    });
    startTimerBtn.addEventListener("click", function (event) {
        var label = "Timing";
        console.time(label);
    });
    endTimerBtn.addEventListener("click", function (event) {
        console.timeEnd("Timing");
    });
    consoleTraceBtn.addEventListener("click", function (event) {
        const method1 = () => { method2(); }
        const method2 = () => { method3(); }
        const method3 = () => { console.trace(); }
        method1(); 
    });
    globalErrorBtn.addEventListener("click", function (event) {
        try {
            const newNum = 5 / 5;
            newNum = 1 * 2;
        }
        catch (error) {
            console.log("Oops! Good Try!");
        }
        finally {
            console.log("We're saved!");
        }
        throw TypeError('NEVER MIND, THERE\'S THE ERROR');
    });
    class PranavError extends Error {
        constructor (message) {
            super (message);
            this.name = "PranavError";
        }
    }
    calculateBtn.addEventListener("click", function (event) {
        throw new PranavError("OH, ANOTHER ONE!");
    });
}