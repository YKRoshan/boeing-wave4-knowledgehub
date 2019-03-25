import { Injectable, EventEmitter } from '@angular/core';
import { Node, Link, ForceDirectedGraph } from './models';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { json } from 'd3';
import { Test } from 'src/app/test';



@Injectable()
export class D3Service {
  url: any;
  form1: any;
  /** This service will provide methods to enable user interaction with elements
    * while maintaining the d3 simulations physics
    */
  constructor(private http:HttpClient,private test:Test) { 
  }

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement, containerElement) {
    let svg, container, zoomed, zoom;

    svg = d3.select(svgElement);
    container = d3.select(containerElement);

    zoomed = () => {
      const transform = d3.event.transform;
      container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
    }

    zoom = d3.zoom().on('zoom', zoomed);
    svg.call(zoom);
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(element, node: Node, graph: ForceDirectedGraph) {
    const d3element = d3.select(element);

    function started() {
      /** Preventing propagation of dragstart to parent elements */
      d3.event.sourceEvent.stopPropagation();

      if (!d3.event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      d3.event.on('drag', dragged).on('end', ended);

      function dragged() {
        node.fx = d3.event.x;
        node.fy = d3.event.y;
      }

      function ended() {
        if (!d3.event.active) {
          graph.simulation.alphaTarget(0);
        }

        node.fx = null;
        node.fy = null;
      }
    }

    d3element.call(d3.drag()
      .on('start', started));
  }

  /** The interactable graph we will simulate in this article
  * This method does not interact with the document, purely physical calculations with d3
  */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width, height }) {
    const sg = new ForceDirectedGraph(nodes, links, options);
    return sg;
  }

  getJson():Observable<any>{
    console.log("f");
    return this.http.get("/home/user/Videos/d3/angular-d3-graph-example/graph.json");
  }

  getNeo4j(){
    this.url="http://localhost:7474/db/data/cypher";
    // this.form1={
    //   "query" : "MATCH (a:Level)-[r:levelOf]->(b:Level) WITH collect(source:a.name,target: b.name,value: type(r)}) AS links RETURN links",
    //   "params" : {}
    // }

    this.form1={};

    this.form1.query="MATCH (a:Concept)-[r:subconceptOf]->(b:Concept) WITH collect({ source:a.name,target: b.name, value: type(r)}) AS links RETURN links"

    this.form1.params={}




    this.http.post(this.url,this.form1)
         .subscribe(data=>{
         this.test.dat = (data['data'][0][0])
          for (let d = 0; d < this.test.dat.length; d++){
            var s= this.test.dat[d].source;
            var t = this.test.dat[d].target;
            this.test.arr.push(s);
            this.test.arr.push(t);
          }
          
         })
         return this.test;
         
  }
}
